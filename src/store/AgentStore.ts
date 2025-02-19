import { AiAgentDomain, ToolType, LlmModel } from 'src/GraphQLComponents';
import { create } from 'zustand';
export interface Tool {
  name: string;
  icon: React.ElementType;
  tool: ToolType;
}
export interface AgentBasicSettings {
  addLabel: boolean;
  canSuggestReply: boolean;
  canManageSocial: boolean;
  labels: string[];
}

export interface AgentData extends AgentBasicSettings {
  agentName: string;
  agentDescription: string;
  domain: AiAgentDomain;
  llm: LlmModel;
  agentInstruction: string;
  welcomeMessage: string;
  taskName:string;
  tools: Tool[]

}

interface AgentStore {
  formData: AgentData;
  setFormData: (newFormData: Partial<AgentData>) => void;
}

const useAgentStore = create<AgentStore>((set) => ({
  formData: {
    agentName: "",
    agentDescription: "",
    domain: AiAgentDomain.Assistant,
    llm: LlmModel.Gpt3_5,
    labels: [],
    tools: [],
    addLabel: false,
    canSuggestReply: false,
    canManageSocial: false,
    agentInstruction: "",
    welcomeMessage: "",
    taskName: ""
  },
  setFormData: (newFormData) =>
    set((state) => ({ formData: { ...state.formData, ...newFormData } })),

}));

export default useAgentStore;
