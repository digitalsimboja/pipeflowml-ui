"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { RiAddLine } from "react-icons/ri";
import Sidebar from "src/components/Sidebar";

interface AgentData {
  agentName: string;
  agentDescription: string;
  llm: string;
  labels: string[];
  addLabel: boolean;
  canReply: boolean;
  canManageSocial: boolean;
}

const NewAgent = () => {
  const router = useRouter();
  const params = useParams<{ accountId: string; userId: string }>();
  const [formData, setFormData] = useState<AgentData>({
    agentName: "",
    agentDescription: "",
    llm: "GPT3.5",
    labels: [],
    addLabel: false,
    canReply: false,
    canManageSocial: false
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
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
        [name]: name == "labels" ? [...formData.labels,value]: value
      }));
    }
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const showAgents = () => {
    router.push(`/agents/${params.accountId}/${params.userId}/create`);
  };

  const AgentName = () => {
    return (
      <div className=" rounded-lg bg-white h-40">
        <div className="h-1/2 bg-gradient-to-r from-gray-200 to-white "></div>
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
      <div className=" rounded-lg bg-white p-2 flex flex-col gap-8 ">
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
          <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-200 pt-2 pb-2 font-semibold text-white rounded-md w-40">
            Telegram Bot <span className="ml-1">&gt;</span>
          </button>
          <button className="bg-gradient-to-r from-blue-500  to-red-200  pt-2 pb-2 font-semibold text-white rounded-md w-40">
            Slack Bot <span className="ml-1">&gt;</span>
          </button>
        </div>
      </div>
    );
  };

  const ToolSection = () => {
    return (
      <div className="col-span-full md:col-span-2 rounded-lg bg-white h-full md:h-[600px] p-8 gap-20 flex flex-col items-center">
        <div className="flex flex-col text-center mx-auto">
          <h3 className="text-2xl font-bold tracking-wide text-black">
            Equip your agents
          </h3>
          <p className=" text-gray-500 text-sm max-w-xs">
            Provide more power to your agents by equipping them with tools to
            enhance their skillset
          </p>
        </div>
        <div className="mx-auto ">
          <Image
            src="/images/tools.jpeg"
            alt="Tools image"
            width={200}
            height={200}
            className="z-index-[-200] "
          />
        </div>
        <button className="bg-black text-white p-2 rounded-lg z-index-200 m-8">
          Add tools
        </button>
      </div>
    );
  };

  const AgentBasicSettingsSection = () => {
    return (
      <div className="col-span-full md:col-span-1 rounded-lg bg-white h-full md:h-[600px] p-4">
        <div className="items-center justify-center flex flex-wrap -m-2">
          <div className="flex items-center justify-between">
            <div className="flex-grow">
              <h3 className="text-sm font-bold tracking-wide">
                Can schedule a meeting...
              </h3>
              <p className="text-gray-500 text-xs tracking-tight">
                Allow the agent to arrange a call with internal team members
              </p>
            </div>
            <button className="bg-black text-white rounded-2xl px-2">
              Upgrade
            </button>
          </div>
          <hr className="border-b border-gray-200 w-full my-2" />
        </div>
        <div className="items-center justify-center flex flex-wrap -m-2 md:mt-8">
          <div className="flex items-start">
            <div className="flex-grow">
              <h3 className="text-sm font-bold tracking-wide">
                Can suggest replies
              </h3>
              <p className="text-gray-500 text-xs tracking-tight">
                Agents to suggest replies now cost credits. Empower your agent
                to suggest replies to end-users
              </p>
            </div>
            <div className="ml-auto">
              <button
                className={`relative bg-blue-300 w-12 h-6 rounded-full ${
                  formData.canReply ? "bg-blue-500" : "bg-blue-300"
                }`}
                onClick={(e) =>
                  handleInputChange({
                    target: { name: "canReply", value: !formData.canReply }, 
                    type: "checkbox",
                  } as unknown as ChangeEvent<HTMLInputElement>)
                }
              >
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full transition-transform transform ${
                    formData.canReply ? "translate-x-full" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>
          <hr className="border-b border-gray-200 w-full my-2" />
        </div>
        <div className="items-center justify-center flex flex-wrap -m-2 md:mt-8">
          <div className="flex items-start">
            <div className="flex-grow">
              <h3 className="text-sm font-bold tracking-wide">
                Can manage Social Media
              </h3>
              <p className="text-gray-500 text-xs tracking-tight">
                Reach further and engage more across multiple platforms
              </p>
            </div>
            <div className="ml-auto">
            <button
                className={`relative bg-blue-300 w-12 h-6 rounded-full ${
                  formData.canManageSocial ? "bg-blue-500" : "bg-blue-300"
                }`}
                onClick={(e) =>
                  handleInputChange({
                    target: { name: "canManageSocial", value: !formData.canManageSocial }, 
                    type: "checkbox",
                  } as unknown as ChangeEvent<HTMLInputElement>)
                }
              >
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full transition-transform transform ${
                    formData.canManageSocial ? "translate-x-full" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>
          <hr className="border-b border-gray-200 w-full my-2" />
        </div>
        <div className="mt-8">
          <div className="flex items-start mb-2">
            <div className="flex-grow">
              <h3 className="text-sm font-bold tracking-wide">
                Can label tasks
              </h3>
              <p className="text-gray-500 text-xs tracking-tight">
                Tags the agent can use to label your tasks
              </p>
              <input
                type="text"
                className="w-full text-sm border-gray-100 rounded p-2 border-b-[2px]  font-bold"
                name="labels"
                value={formData.labels}
                onChange={handleInputChange}
                placeholder="Label your tasks.."
              />
            </div>
          </div>
          <div className="mr-auto">
            <button className="flex justify-center items-center text-sm  px-4 py-2  bg-black text-white rounded hover:bg-blue-600">
              <RiAddLine className="mr-1" />
              Add label
            </button>
          </div>
        </div>
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
        <div className="flex flex-col  justify-center border  rounded-lg items-center gap-2 p-2 bg-gradient-to-r from-gray-200 to-white">
          <h3>Unlock AI Workforce feature</h3>
          <div className="flex justify-between gap-2 ">
            <button className="bg-black p-1 font-semibold text-white rounded ">
              Upgrade <span className="ml-1">&gt;</span>
            </button>
            <button className="bg-black p-1 font-semibold text-white rounded ">
              Book a meeting <span className="ml-1">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  console.log({ formData });
  return (
    <Sidebar>
      <div className="ml-0 md:ml-60 ">
        <div className="flex justify-between items-center bg-white mb-2">
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
