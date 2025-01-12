import os
from agent_utils import get_agent_response,get_embedding
from openai import OpenAI
from copy import deepcopy
from pinecone import Pinecone
from dotenv import load_dotenv
load_dotenv()

class DetailsAgent():
    def __init__(self):
        self.client = OpenAI(
            api_key=os.getenv("RUNPOD_TOKEN"),
            base_url=os.getenv("RUNPOD_CHATBOT_URL"),
        )
        self.embedding_client = OpenAI(
            api_key=os.getenv("RUNPOD_TOKEN"), 
            base_url=os.getenv("RUNPOD_EMBEDDING_URL")
        )
        self.model_name = os.getenv("MODEL_NAME")
        self.pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))
        self.index_name = os.getenv("PINECONE_INDEX_NAME")
    
    def get_closest_results(self,index_name,input_embeddings,top_k=2):
        index = self.pc.Index(index_name)
        
        results = index.query(
            namespace="threeai",
            vector=input_embeddings,
            top_k=top_k,
            include_values=False,
            include_metadata=True
        )

        return results

    def get_response(self,messages):
        messages = deepcopy(messages)

        user_message = messages[-1]['content'] #Get the most recent user message
        embedding = get_embedding(self.embedding_client,self.model_name,user_message)[0]
        #Get the embedding mapping from the vectors we have 
        #Note to self add more later on
        
        result = self.get_closest_results(self.index_name,embedding)
        source_knowledge = "\n".join([x['metadata']['text'].strip()+'\n' for x in result['matches'] ])

        prompt = f"""
        Using the contexts below, answer the query.

        Contexts:
        {source_knowledge}

        Query: {user_message}
        """

        system_prompt = """ You are a customer support agent for a coffee shop called Merry's way. You should answer every question as if you are waiter and provide the neccessary information to the user regarding their orders """
        messages[-1]['content'] = prompt
        input_messages = [{"role": "system", "content": system_prompt}] + messages[-3:]

        chatbot_agent_output = get_agent_response(self.client,self.model_name,input_messages)
        output = self.generate_postprocess(chatbot_agent_output)
        return output

    def generate_postprocess(self,output):
        agent_output = {
            "role": "assistant",
            "content": output,
            "memory": {"agent":"details_agent"
                      }
        }
        return agent_output

    