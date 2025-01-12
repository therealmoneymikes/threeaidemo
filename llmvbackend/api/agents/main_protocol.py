from typing import Protocol, Dict, List, Any


#[{"key": value}] = List[Dict[str, Any]]
#Returns Response a signle Dictionary object
class MainAgentProtocol(Protocol):
    def get_response(self, message: List[Dict[str, Any]]) -> Dict[str, Any]:
        ...