import runpod
from agentcontrollers.agent_controller import AgentController

def main():
    """
    LLM Engine Main Entry 
    """
    agent_controller = AgentController() #Active Agent Controller to Activate AI Agent Agents
    runpod.serverless.start({"handler": agent_controller.get_agent_response}) #Get agent responses


if __name__ == "__main__":
    main()