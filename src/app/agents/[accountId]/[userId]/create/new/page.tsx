"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Sidebar from "src/components/Sidebar";

interface AgentData {
  agentName: string;
  agentDescription: string;
  llm: string;
}

const NewAgent = () => {
  const router = useRouter();
  const params = useParams<{ accountId: string; userId: string }>();
  const showAgents = () => {
    router.push(`/agents/${params.accountId}/${params.userId}/create`);
  };
  const [formData, setFormData] = useState<AgentData>({
    agentName: "",
    agentDescription: "",
    llm: "GPT3.5",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
    e.target.focus();
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, llm: event.target.value });
  };

  const AgentDescriptionSection = () => {
    return (
      <div className=" flex flex-col gap-4">
        <AgentName />
        <LLMSection />
        <AgentTriggerSection />
        <AgentTeamSection />
      </div>
    );
  };

  const AgentName = () => {
    return (
      <div className=" rounded-lg bg-white p-2 h-40">
        <div className="h-1/2 bg-gradient-to-r from-gray-200 to-white"></div>
        <div>
          <input
            type="text"
            className="w-full text-sm border-gray-100 rounded p-2 border-b-[2px]  font-bold"
            name="agentName"
            value={formData.agentName}
            onChange={handleInputChange}
            placeholder="Name your agent..."
          />
          <input
            type="text"
            className="w-full text-xs border-gray-100 border-b-[1px] p-2 font-bold"
            name="agentDescription"
            value={formData.agentDescription}
            onChange={handleInputChange}
            placeholder="Enter description..."
          />
        </div>
      </div>
    );
  };

  const LLMSection = () => {
    return (
      <div className=" rounded-lg bg-white p-2 h-40 flex flex-col gap-4">
        <div>
          <h3 className="font-semibold text-sm tracking-wide ">
            Choose a Language Model (LLM)
          </h3>
          <p className="text-xs tracking-wide text-gray-500">
            Choose among multiple Large Language models. The default is OpenAI
            GPT3.5
          </p>
        </div>
        <div className="rounded-lg border p-2">
          <select
            className=" w-full bg-white font-bold"
            name="llm"
            value={formData.llm}
            onChange={handleSelectChange}
          >
            <option value="">Select a model...</option>
            <option value="GPT3.5">GPT3.5</option>
            <option value="GPT4">GPT4</option>
          </select>
        </div>
      </div>
    );
  };

  const AgentTriggerSection = () => {
    return (
      <div className=" rounded-lg bg-white p-2 flex flex-col gap-8 md:h-40 h-full">
        <div>
          <h3 className="font-semibold text-sm tracking-wide ">
            Enable a Trigger
          </h3>
          <p className="text-xs tracking-wide text-gray-500">
            Connect a Trigger to activate the agent. Triggers are used to wake
            up the agent or change its performance
          </p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <button className="bg-blue-500 pt-2 pb-2 font-semibold text-white rounded-md w-40">
            Telegram Bot <span className="ml-1">&gt;</span>
          </button>
          <button className="bg-blue-500 pt-2 pb-2 font-semibold text-white rounded-md w-40">
            Slack Bot <span className="ml-1">&gt;</span>
          </button>
        </div>
      </div>
    );
  };

  const ToolSection = () => {
    return (
      <div className="col-span-full md:col-span-2 rounded-lg bg-white  flex flex-col items-center h-full md:h-80">
        <div>Item 5</div>
      </div>
    );
  };

  const AgentBasicSettingsSection = () => {
    return (
      <div className="col-span-full md:col-span-1 rounded-lg bg-white h-full md:h-80">
        Item 6
      </div>
    );
  };

  const AgentAdvancedSettingSection = () => {
    return <div className="col-span-3 bg-white rounded-lg">Item 7</div>;
  };

  const AgentInstructionSection = () => {
    return <div className="col-span-3 bg-white rounded-lg">Item 8</div>;
  };

  const AgentTeamSection = () => {
    return (
      <div className=" rounded-lg bg-white p-2 flex flex-col gap-4">
        <div>
          <h3 className="font-semibold text-sm tracking-wide ">
            Cordinate Agent Workforce
          </h3>
          <p className="text-xs tracking-wide text-gray-500">
            Let your agent cordinate the activities of other agents. Supervise
            their actions and delegate tasks
          </p>
        </div>
        <div className="flex flex-col  justify-center border  rounded-lg items-center gap-2 p-2 bg-gray-200">
          <h3>Unlock AI Workforce feature</h3>
          <div className="flex justify-between gap-2">
          <button className="bg-black pt-2 pb-2 font-semibold text-white rounded w-40">Upgrade  <span className="ml-1">&gt;</span></button>
          <button className="bg-black pt-2 pb-2 font-semibold text-white rounded w-40">Book a meeting  <span className="ml-1">&gt;</span></button>
          </div>
        </div>
      </div>
    );
  };

  console.log({ formData });
  return (
    <Sidebar>
      <div className="ml-0 md:ml-60 ">
        <div className="flex justify-between items-center bg-white">
          <button
            onClick={showAgents}
            className="bg-gray-200 pt-2 pb-2 px-4 font-semibold rounded-md "
          >
            Cancel
          </button>
          <button className="bg-blue-500 pt-2 pb-2 font-semibold text-white rounded-md w-40">
            Create Agent <span className="ml-1">&gt;</span>
          </button>
        </div>
        <span className="block border-b border-gray-200 w-full my-2"></span>

        <div className="grid grid-cols-1 md:grid-cols-4 p-4 gap-4 bg-blue-50  rounded-lg ">
          <AgentDescriptionSection />
          <ToolSection />
          <AgentBasicSettingsSection />

          <div></div>
          <AgentAdvancedSettingSection />
          <div></div>
          <AgentInstructionSection />
        </div>
      </div>
    </Sidebar>
  );
};

export default NewAgent;
