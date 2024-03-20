import { create } from 'zustand';

export interface AgentBasicSettings {
  addLabel?: boolean;
  canReply?: boolean;
  canManageSocial?: boolean;
  labels: string[];
}

export interface AgentData extends AgentBasicSettings {
  agentName: string;
  agentDescription: string;
  llm: string;

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
    addLabel: false,
    canReply: false,
    canManageSocial: false,
  },
  setFormData: (newFormData) =>
    set((state) => ({ formData: { ...state.formData, ...newFormData } })),

}));

export default useAgentStore;
