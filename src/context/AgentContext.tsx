"use client";
import { createContext, useContext, useState } from "react";

const AgentContext = createContext<{
  formData: AgentData;
  updateFormData: (newFormData: AgentData) => void;

}>({
  formData: {
    agentName: "",
    agentDescription: "",
    llm: "GPT3.5",
    labels: [],
    addLabel: false,
    canReply: false,
    canManageSocial: false,
  },
  updateFormData: () => {},
});

export type AgentData = {
  agentName: string;
  agentDescription: string;
  llm: string;
  labels: string[];
  addLabel: boolean;
  canReply: boolean;
  canManageSocial: boolean;
};

export const AgentProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<AgentData>({
    agentName: "",
    agentDescription: "",
    llm: "GPT3.5",
    labels: [],
    addLabel: false,
    canReply: false,
    canManageSocial: false,
  });

  const updateFormData = (newFormData: Partial<AgentData>)  => {
    setFormData((prevFormData) => ({ ...prevFormData, ...newFormData }));
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const isChecked =
      e.target instanceof HTMLInputElement ? e.target.checked : undefined;

    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: isChecked,
      }));
    } else if (type === "select-one") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: name === "labels" ? [...prevFormData.labels, value] : value,
      }));
    }
  };

  return (
    <AgentContext.Provider value={{ formData, updateFormData }}>
      {children}
    </AgentContext.Provider>
  );
};

export function useAgentContext() {
  return useContext(AgentContext);
}
