import os
import pandas as pd
import json
import csv
from openai import OpenAI
from copy import deepcopy
from dotenv import load_dotenv
load_dotenv()


class RecommendationAgent():
    def __init__(self, apriori_rec_path, popular_rec_path):
        self.client = OpenAI(
            api_key=os.getenv("RUNPOD_TOKEN"), #Run Pod API Token
            base_url=os.getenv("RUNPOD_CHATBOT_URL"), #Chat Bot URL
        )
        #Model Name
        self.model_name = os.getenv("MODEL_NAME")
        
        #Extract Apriori path (Contains lift, confidence, etc...)
        with open(apriori_rec_path, "r") as file:
            self.apriori_recommendations = json.load(file)
            
        #popular recommendations
        self.popular_recommendations = pd.read_csv(popular_rec_path) #Read CSV results
        #Extracting all products in recommendations into a list
        self.products = self.popular_recommendations["product"].tolist() 
        #Extracting all product categories in recommendations into a list
        self.product_categories = self.popular_recommendations["product_category"]
    
    
    #Recommendation Classifications
    
    
    def get_apriori_recommendations(self, products, top_k=5):
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
                
            if recommendations_by_category[product_category] >= 2: #Limit to 2 per category
                continue
            
            #Add the two cateogries to i.e 0, then 1 which is two products
            recommendations.append(recommendation['product']) ##Add the products to the list
            
            #Make sure the length is not than the data's top_k
            #top_k is 5 at 
            if len(recommendations) >= top_k:
                break
            
        return recommendations
    
    def get_popular_recommendations(self, product_categories=None, top_k=5):
        recommendations_dataframe = self.popular_recommendations ## Popular Recommendations dataframe
        
        ##Make sure its a string
        if type(product_categories) == str:
            product_categories = [product_categories] #
        
        #Checking if product cateogries have been added
        if product_categories is not None:
            #Set category key
            recommendation_category_key = self.popular_recommendations["product_category"] 
            #Set values of the categories to the recommendations dataframe
            recommendations_dataframe = self.popular_recommendations[recommendation_category_key.isin(product_categories)]
         #Sorting by number of transaction, the more transcations meaning more popular
        recommendations_dataframe = recommendations_dataframe.sort_values(by="number_of_transactions", ascending=False)
       
       #Check if the first index of the dataframe shape is 0
        if recommendations_dataframe.shape[0] == 0:
            return []
        
        #Extract product to a list format where index range is 0 to top_k
        recommendations = recommendations_dataframe['product'].tolist()[:top_k]
        return recommendations
    
    
    
      
