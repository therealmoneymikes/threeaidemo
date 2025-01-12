

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

#Data Correction Prompts
def data_correction_prompt(subject: str, data: any) -> str:
    return f""" You will check this {subject} and correct any mistakes that will make it invalid. Then you will return the corrected json string. Nothing else. 
    If the {subject} is correct just return it.

    Do NOT return any other data apar from the {subject}.

    {data}
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