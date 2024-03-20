import { AgentData } from "src/store/AgentStore";

export const isDataEmpty=(agentData: AgentData) => {
    for (const key in agentData) {
      if ((agentData[key as keyof AgentData] as string) === '') {
          return true;
        }
      }
      return false;
}
