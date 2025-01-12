import os
import json
from copy import deepcopy
from agent_utils import get_agent_response, classification_prompt
from openai import OpenAI
from dotenv import load_dotenv
load_dotenv()

class ClassificationAgent():
    def __init__(self):
        self.client = OpenAI(
            api_key=os.getenv("RUNPOD_TOKEN"),
            base_url=os.getenv("RUNPOD_CHATBOT_URL"),
        )
        self.model_name = os.getenv("MODEL_NAME")
    
    def get_response(self,messages):
        messages = deepcopy(messages)
        #get classification prompt
        system_prompt = classification_prompt()
        
        input_messages = [
            {"role": "system", "content": system_prompt},
        ]
        
        input_messages += messages[-3:]

        chatbot_output = get_agent_response(self.client,self.model_name,input_messages)
        output = self.generate_postprocess(chatbot_output)
        return output

    def generate_postprocess(self,output):
        output = json.loads(output)

        agent_output = {
            "role": "assistant",
            "content": output['message'],
            "memory": {"agent":"classification_agent",
                       "classification_decision": output['decision']
                      }
        }
        return agent_output

    
