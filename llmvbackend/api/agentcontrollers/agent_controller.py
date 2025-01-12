from agents import (MainAgentProtocol,
                    GuardAgent,
                    RecommendationAgent,
                    OrderTakingAgent,
                    ClassificationAgent,
                    DetailsAgent,
                    )

class AgentController():
    """
    summary: On Initialisation of the AgentController class the chatbot agents are initialised for use
    """
    def __init__(self):
        
        self.recommendation_agent = RecommendationAgent('recommendation_objects/apriori_recommendations.json',
                                                        'recommendation_objects/popularity_recommendation.csv'
                                                        )#Add JSON and CSV apriori files for data processing 
        self.guard_agent = GuardAgent() #Initialise Guard Agent
        self.classification_agent = ClassificationAgent() #Initialise classification agent
        
        #
        self.agent_dict: dict[str, MainAgentProtocol] = {
            "details_agent": DetailsAgent(),
            "order_taking_agent": OrderTakingAgent(self.recommendation_agent),
            "recommendation_agent": self.recommendation_agent
        }
    
    #Note to self to much repeating of get_agent_response ---> try to make the method reusable
    def get_agent_response(self,input):
        # Extract Users Input
        user_input = input["input"]
        #Data extracted from list of message, the most recent message i.e messages[:-1]
        messages = user_input["messages"] 

        # Get Guard Agent's response
        guard_agent_response = self.guard_agent.get_response(messages)
        ##Check for that user input is not unauthorised according to the rules
        if guard_agent_response["memory"]["guard_decision"] == "unauthorised":
            return guard_agent_response
        
        # Get Classification Agent's response
        classification_agent_response = self.classification_agent.get_response(messages)
        chosen_agent=classification_agent_response["memory"]["classification_decision"] #Extract classification decision

        # Get the chosen agent's response
        agent = self.agent_dict[chosen_agent]
        response = agent.get_response(messages)

        return response
