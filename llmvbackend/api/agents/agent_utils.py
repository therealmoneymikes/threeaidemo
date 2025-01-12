

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