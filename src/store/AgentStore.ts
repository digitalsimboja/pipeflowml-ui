import { create } from 'zustand';

export interface AgentBasicSettings {
  addLabel: boolean;
  canSuggestReply: boolean;
  canManageSocial: boolean;
  labels: string[];
}

export interface AgentData extends AgentBasicSettings {
  agentName: string;
  agentDescription: string;
  llm: string;
  agentInstruction: string;
  welcomeMessage: string;
  taskName:string;
  tools: []

}

interface AgentStore {
  formData: AgentData;
  setFormData: (newFormData: Partial<AgentData>) => void;
}

const useAgentStore = create<AgentStore>((set) => ({
  formData: {
    agentName: "",
    agentDescription: "",
    llm: " GPT3.5",
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
