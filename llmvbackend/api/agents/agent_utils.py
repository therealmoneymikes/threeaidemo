

#Reusable function get chatbot agent responses 
def get_agent_response(client, model_name, messages, temperature=0):
    input_messages = []
    #Loop over messages from client add them to input_messages list
    for message in messages:
        input_messages.append({"role": message["role"], "content": message["content"]})
        
    agent_response = client.chat.completions.create(
        messages=input_messages,
         model=model_name,
         temperature=temperature,
         top_p=0.8,
         max_tokens=2000
     ).choices[0].message.content 
    
    return agent_response

#Extract embeddings for vectors of data in the llm
def get_embedding(embedding_client,model_name,input):
    #Creae embeddings for that in
    output = embedding_client.embeddings.create(input=input,model=model_name)
    
    embeddings_list = []
    #
    for embedding_object in output.data:
        embeddings_list.append(embedding_object.embedding)

    return embeddings_list

#Data Prompts
#Correction Prompt
def data_correction_prompt(subject: str, data: any) -> str:
    return f""" You will check this {subject} and correct any mistakes that will make it invalid. Then you will return the corrected json string. Nothing else. 
    If the {subject} is correct just return it.

    Do NOT return any other data apar from the {subject}.

    {data}
    """
    
def main_system_prompt(products, product_categories):
    return """ You are a helpful AI assistant for a coffee shop application which serves drinks and pastries. We have 3 types of recommendations:

        1. Apriori Recommendations: These are recommendations based on the user's order history. We recommend items that are frequently bought together with the items in the user's order.
        2. Popular Recommendations: These are recommendations based on the popularity of items in the coffee shop. We recommend items that are popular among customers.
        3. Popular Recommendations by Category: Here the user asks to recommend them product in a category. Like what coffee do you recommend me to get?. We recommend items that are popular in the category of the user's requested category.
        
        Here is the list of items in the coffee shop:
        """+ ",".join(products) + """
        Here is the list of Categories we have in the coffee shop:
        """ + ",".join(product_categories) + """

        Your task is to determine which type of recommendation to provide based on the user's message.

        Your output should be in a structured json format like so. Each key is a string and each value is a string. Make sure to follow the format exactly:
        {
        "chain of thought": Write down your critical thinking about what type of recommendation is this input relevant to.
        "recommendation_type": "apriori" or "popular" or "popular by category". Pick one of those and only write the word.
        "parameters": This is a  python list. It's either a list of of items for apriori recommendations or a list of categories for popular by category recommendations. Leave it empty for popular recommendations. Make sure to use the exact strings from the list of items and categories above.
        }
        """
def main_shop_agent_prompt():
        return f"""
        You are a helpful AI assistant for a blockchain based coffee shop application which serves various drinks, pastries and condiments.
        your task is to recommend coffee shop items to the user based on their input message. And respond in a friendly and concise way. 
        And give responses that in an unordered list with a short description.

        I will provide what items you should recommend to the user based on their order in the user message. 
        """
def order_taking_prompt():
    return """
            You are a customer support Bot agent for a blockchain based coffee shop called "3Chat AI"

            here is the menu for this coffee shop.

            Dark chocolate (Drinking Chocolate) - $5.00
            Cappuccino - $4.50
            Latte - $4.75
            Jumbo Savory Scone - $3.25
            Espresso shot - $2.00
            Dark chocolate (Packaged Chocolate) - $3.00
            Croissant - $3.25
            Chocolate Croissant - $3.75
            Almond Croissant - $4.00
            Chocolate Chip Biscotti - $2.50
            Hazelnut Biscotti - $2.75
            Ginger Biscotti - $2.50
            Cranberry Scone - $3.50
            Oatmeal Scone - $3.25
            Ginger Scone - $3.50
            Chocolate syrup - $1.50
            Hazelnut syrup - $1.50
            Carmel syrup - $1.50
            Sugar Free Vanilla syrup - $1.50

            Things to NOT DO:
            * Don't tell the user to go to place to get the order
            * DON't ask how to pay by cash or Card.
            * Don't tell the user to go to the counter


            You're task is as follows:
            1. Take the User's Order
            2. Validate that all their items are in the menu
            3. If an item is not in the menu let the user and repeat back the remaining valid order
            4. Ask them if they need anything else.
            5. If they do then repeat starting from step 3
            6. If they don't want anything else. Using the "order" object that is in the output. Make sure to hit all three points
                1. list down all the items and their prices
                2. calculate the total. 
                3. Thank the user for the order and close the conversation with no more questions

            The user message will contain a section called memory. This section will contain the following:
            "order"
            "step number"
            please utilize this information to determine the next step in the process.
            
            produce the following output without any additions, not a single letter outside of the structure bellow.
            Your output should be in a structured json format like so. each key is a string and each value is a string. Make sure to follow the format exactly:
            {
            "chain of thought": Write down your critical thinking about what is the maximum task number the user is on write now. Then write down your critical thinking about the user input and it's relation to the coffee shop process. Then write down your thinking about how you should respond in the response parameter taking into consideration the Things to NOT DO section. and Focus on the things that you should not do. 
            "step number": Determine which task you are on based on the conversation.
            "order": this is going to be a list of jsons like so. [{"item":put the item name, "quanitity": put the number that the user wants from this item, "price":put the total price of the item }]
            "response": write the a response to the user
            }
        """
def input_guard_prompt():
     return """
            You are a helpful AI assistant for a blockchain based coffee shop application which serves various drinks, pastries and condiments.
            Your task is to determine whether the user is asking something relevant to the coffee shop or not.
            The user is allowed to:
            1. Ask questions about the coffee shop, like menu items, opening hours, locations, and coffee shop related questions.
            2. Ask questions about details of menu items, they ask for possible allergens e.g contains nuts, contains milk , they can ask for details of ingridients.
            3. Ask about recommendations of what to buy.
            4. Make an order.

            The user is NOT allowed to:
            1. Use profanity in their inputs that contain the word or match the words such as shit, fuck, sex, dick, porn, piss
            1. Ask questions about anything else other than about the coffee shop.
            2. Ask questions about the staff
            3. Ask questions how to make a certain menu item.

            Your output should be in a structured json format like so. each key is a string and each value is a string. Make sure to follow the format exactly:
            {
            "chain_of_thought": go over each of the instructions above and analyse to see if the message lies under a certian point or not. Then you write out your thoughts about what points the is input relevant to.
            "decision": "authorised" or "unauthorised". Pick one of those. and only write the word.
            "message": leave the message empty if it's authorised, otherwise write "Sorry, I can't help with that. Can I help you with your order?"
            }
            
            """
#CSV Data Checking
def check_csv_output(client, model_name, csv_string):
    prompt = data_correction_prompt("csv string", csv_string)
    
    messages = [{"role": "user", "content": prompt}]
    agent_response = get_agent_response(client, model_name, messages)
    return agent_response

#JSON Data Checking
def check_json_output(client, model_name, json_string):
    prompt = data_correction_prompt("csv string", json_string)
    
    messages = [{"role": "user", "content": prompt}]
    agent_response = get_agent_response(client, model_name, messages)
    return agent_response

#H