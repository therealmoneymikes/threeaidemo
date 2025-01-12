import os
import json
from agent_utils import get_agent_response,check_csv_output, check_json_output, order_taking_prompt
from openai import OpenAI
from copy import deepcopy
from dotenv import load_dotenv
load_dotenv()


class OrderTakingAgent():
    def __init__(self, recommendation_agent):
        self.client = OpenAI( 
            api_key=os.getenv("RUNPOD_TOKEN"),
            base_url=os.getenv("RUNPOD_CHATBOT_URL"),
        )
        self.model_name = os.getenv("MODEL_NAME")

        self.recommendation_agent = recommendation_agent
    
    def get_response(self,messages):
        messages = deepcopy(messages)
        
        #Get Order Taking
        system_prompt = order_taking_prompt()

        last_order_taking_status = ""
        asked_recommendation_before = False
        for message_index in range(len(messages)-1,0,-1):
            message = messages[message_index]
            
            agent_name = message.get("memory",{}).get("agent","")
            if message["role"] == "assistant" and agent_name == "order_taking_agent":
                step_number = message["memory"]["step number"]
                order = message["memory"]["order"]
                asked_recommendation_before = message["memory"]["asked_recommendation_before"]
                last_order_taking_status = f"""
                step number: {step_number}
                order: {order}
                """
                break

        messages[-1]['content'] = last_order_taking_status + " \n "+ messages[-1]['content']

        input_messages = [{"role": "system", "content": system_prompt}] + messages        

        chatbot_output = get_agent_response(self.client,self.model_name,input_messages)

        # double check json 
        chatbot_output = check_json_output(self.client,self.model_name,chatbot_output)

        output = self.generate_postprocess(chatbot_output,messages,asked_recommendation_before)

        return output

    def generate_postprocess(self,output,messages,asked_recommendation_before):
        output = json.loads(output)

        if type(output["order"]) == str:
            output["order"] = json.loads(output["order"])

        response = output['response']
        if not asked_recommendation_before and len(output["order"])>0:
            #return recommendations from llm engine api
            recommendation_output = self.recommendation_agent.get_order_recommedations(messages,output['order'])
            response = recommendation_output['content']
            asked_recommendation_before = True

        postprocess_output = {
            "role": "assistant",
            "content": response ,
            "memory": {"agent":"order_taking_agent",
                       "step number": output["step number"],
                       "order": output["order"],
                       "asked_recommendation_before": asked_recommendation_before
                      }
        }

        
        return postprocess_output

    
