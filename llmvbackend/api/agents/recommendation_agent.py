import os
import pandas as pd
import json
import csv
from openai import OpenAI
from copy import deepcopy
from dotenv import load_dotenv
load_dotenv()
from agent_utils import main_system_prompt, get_agent_response, main_shop_agent_prompt

#Constants
PRODUCT_CATEGORY_LIMIT = 2
class RecommendationAgent():
    def __init__(self, apriori_rec_path, popular_rec_path):
        
        self.client = OpenAI(
            api_key=os.getenv("RUNPOD_TOKEN"), #Run Pod API Token
            base_url=os.getenv("RUNPOD_CHATBOT_URL"), #Chat Bot URL
        )
        #Model Name
        self.model_name = os.getenv("MODEL_NAME")
        
        #Extract Apriori path (Contains lift, confidence, etc...)
        
        try: 
            with open(apriori_rec_path, "r") as file:
                self.apriori_recommendations = json.load(file)
        except FileNotFoundError:
            raise FileNotFoundError(f"Apriori recommendatios file not found: {apriori_rec_path}")
        except json.JSONDecodeError:
            raise ValueError(f"Error decoding JSON in file: {apriori_rec_path}") 
        #popular recommendations
        self.popular_recommendations = pd.read_csv(popular_rec_path) #Read CSV results
        #Extracting all products in recommendations into a list
        self.products = self.popular_recommendations["product"].tolist() 
        #Extracting all product categories in recommendations into a list
        self.product_categories = self.popular_recommendations["product_category"]
    
    
  
    #Recommendation Classifications
    def get_apriori_recommendations(self, products: list, top_k: int =5) -> list:
        
        """
        Get recommendations based on Apriori algorithm results.

        Args:
            products (list): List of product names.
            top_k (int): Maximum number of recommendations to return.

        Returns:
            list: List of recommended product names.
        """
        ...

        
         
        recommendation_list = [] ##Initialised an empty list to store recommendations
        #loop of the array of products from the popular recommendations
        for product in products:
            # Checking products to see they are in the apriori calculations recommendation
            if product in self.apriori_recommendations:
                recommendation_list += self.apriori_recommendations[product]
                
        ##Stored recommendation list by confidence
        recommendation_list = sorted(recommendation_list, key=lambda x: x["confidence"], reverse=True)
        
        # recommendations for the chatbot as a list
        recommendations = []
        #Recs by category initialised to a dict
        recommendations_by_category = {} 
        
        #Processing recommendations list...
        for recommendation in recommendation_list:
            #Skip if recommendations are duplicates 
            if recommendation in recommendations:
                continue 
            
            #Dataset set demo is small so the limit for recs are 2 per cateogory
            product_category = recommendation['product_category']
            # If product category is not in the dict we set to 0
            if product_category not in recommendations_by_category:
                recommendations_by_category[product_category] = 0
                
            if recommendations_by_category[product_category] >= PRODUCT_CATEGORY_LIMIT: #Limit to 2 per category
                continue
            
            #Add the two cateogries to i.e 0, then 1 which is two products
            recommendations.append(recommendation['product']) ##Add the products to the list
            
            #Make sure the length is not than the data's top_k
            #top_k is 5 at 
            if len(recommendations) >= top_k:
                break
            
        return recommendations
    
    def get_popular_recommendations(self, product_categories: list | None=None, top_k:int=5):
        recommendations_dataframe = self.popular_recommendations ## Popular Recommendations dataframe
        
        ##Make sure its a string
        if type(product_categories) == str:
            product_categories = [product_categories] #
        
        #Checking if product cateogries have been added
        if product_categories is not None:
            recommendations_dataframe = self.popular_recommendations[self.popular_recommendations['product_category'].isin(product_categories)]
        recommendations_dataframe = recommendations_dataframe.sort_values(by='number_of_transactions',ascending=False)
        
       
       #Check if the first index of the dataframe shape is 0
        if recommendations_dataframe.shape[0] == 0:
            return []
        
        #Extract product to a list format where index range is 0 to top_k
        recommendations = recommendations_dataframe['product'].tolist()[:top_k]
        return recommendations
    
    # Geenerate after processing classifications
    def generate_postprocess_classfication(self, output: str) -> dict:
        output = json.loads(output) 
        
        output_object = {
            "recommendation_type": output["recommendation_type"],
            "parameters": output["parameters"]
        }
        
        return output_object
    
    #Generate the responses after processing data by data category
    def generate_postprocess(self, output):
        output = {
            "role": "assistant", #Agent role as assistant
            "content": output, # data from response from the agent
            "memory": {"agent": "recommendation_agent"} # memory of recommendation agent data
        }

    #Message Structure Helper
    def construct_input_messages(self, messages, system_prompt):
        return [{"role": "system", "content": system_prompt}] + messages[-3:]
    
    #generate the recommendation classifications
    def agent_recommendation_classification(self, messages):
        #Main System prompt from utils
        system_prompt = main_system_prompt(self.products, self.product_categories)
        
        #Get input messages from client
        input_messages = self.construct_input_messages(messages, system_prompt)
        
        #Get Chatbot agents response
        chatbot_agent_output = get_agent_response(self.client,self.model_name,input_messages)
        output = self.generate_postprocess_classfication(chatbot_agent_output)
        return output
  
    
   
    def get_response(self,messages):
        messages = deepcopy(messages)

        recommendation_classification = self.agent_recommendation_classification(messages)
        recommendation_type = recommendation_classification['recommendation_type']
        recommendations = []
        # Recommendations from apriori
        if recommendation_type == "apriori":
            recommendations = self.get_apriori_recommendations(recommendation_classification['parameters'])
        # Recommendations from popular
        elif recommendation_type == "popular":
            recommendations = self.get_popular_recommendations()
        # Recommendations from popular data by category
        elif recommendation_type == "popular by category":
            recommendations = self.get_popular_recommendations(recommendation_classification['parameters'])
        
        #If not no recommendations provided
        if recommendations == []:
            return {"role": "assistant", "content":"Sorry, I can't help with that. Can I help you with your order?"}
        
        # Respond to User
        recommendations_str = ", ".join(recommendations)
        
        #Get Main Shop Agent Propt
        system_prompt = main_shop_agent_prompt()
        
        prompt = f"""
        {messages[-1]['content']}

        Please recommend me those items exactly: {recommendations_str}
        """

        messages[-1]['content'] = prompt
        #Get input messages from client
        input_messages = self.construct_input_messages(messages, system_prompt)

        chatbot_output = get_agent_response(self.client,self.model_name,input_messages)
        output = self.generate_postprocess(chatbot_output)

        return output
    
    def get_order_recommedations(self, messages, order):
        products = []
        for product in order:
            products.append(product['item'])
            
        recommendations = self.get_apriori_recommendations(products) ##Map apriori recommendations
        recommendations_str = ", ".join(recommendations)
        
        system_prompt = main_shop_agent_prompt()
        
        prompt = f"""
        {messages[-1]['content']}

        Please recommend me those exact items: {recommendations_str}
        """

        messages[-1]['content'] = prompt #set the most recent message in the list
         #Get input messages from client
        input_messages = self.construct_input_messages(messages, system_prompt)

        chatbot_output = get_agent_response(self.client,self.model_name,input_messages)
        output = self.generate_postprocess(chatbot_output)
        
        return output