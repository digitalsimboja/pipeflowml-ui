"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { RiAddLine, RiCloseLine } from "react-icons/ri";
import Sidebar from "src/components/Sidebar";
import ToolSidebar from "src/components/dashboard/tools/ToolSidebar";
import { toolChain } from "src/lib/data/tools";
import useAgentStore, {
  AgentBasicSettings,
  AgentData,
  Tool,
} from "src/store/AgentStore";

export interface AgentDataProps {
  formData: AgentData;
  setFormData: (newFormData: Partial<AgentData>) => void;
}

export interface ToolSectionProps {
  openToolModal: () => void;
}

export interface AddToolModalProps {
  onClose: () => void;
}

const AgentName: React.FC = () => {
  const { formData, setFormData } = useAgentStore();
  const [agentName, setAgentName] = useState<string>(formData.agentName);
  const [agentDescription, setAgentDescription] = useState<string>(
    formData.agentDescription
  );

  useEffect(() => {
    setFormData({ agentName, agentDescription });
  }, [agentName, agentDescription, setFormData]);

  const handleAgentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgentName(e.target.value);
  };

  const handleAgentDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAgentDescription(e.target.value);
  };

  return (
    <div className="rounded-lg bg-white h-40  pb-4">
      <div className="h-1/2 bg-gradient-to-r from-gray-200 to-white "></div>
      <div className="mt-2">
        <input
          type="text"
          className="w-full text-sm border-gray-300 rounded  focus:outline-none focus:ring focus:border-indigo-300  px-2 py-1"
          name="agentName"
          value={agentName}
          onChange={handleAgentNameChange}
          placeholder="Name your agent..."
        />
        <input
          type="text"
          className="w-full text-xs border-gray-300 rounded  p-2 focus:outline-none focus:ring focus:border-indigo-300 mt-2"
          name="agentDescription"
          value={agentDescription}
          onChange={handleAgentDescriptionChange}
          placeholder="Enter description..."
        />
      </div>
    </div>
  );
};

const LLMSection: React.FC = () => {
  const { formData, setFormData } = useAgentStore();
  const [selectedLLM, setSelectedLLM] = useState<string>(formData.llm);
  useEffect(() => {
    setFormData({ llm: selectedLLM });
  }, [selectedLLM, setFormData]);

  const handleSelectLLMChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setSelectedLLM(e.target.value);
  };

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
          onChange={handleSelectLLMChange}
          className=" w-full bg-white font-bold"
          name="llm"
          defaultValue={selectedLLM}
        >
          <option disabled>Select a model...</option>
          <option value="GPT3.5">GPT3.5</option>
          <option value="GPT4">GPT4</option>
        </select>
      </div>
    </div>
  );
};

const AgentTriggerSection: React.FC = () => {
  return (
    <div className=" rounded-lg bg-white p-2 flex flex-col gap-8 ">
      <div>
        <h3 className="font-semibold text-sm tracking-wide ">
          Enable a Trigger
        </h3>
        <p className="text-xs tracking-wide text-gray-500">
          Connect a Trigger to activate the agent. Triggers are used to wake up
          the agent or change its performance
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

const AgentTeamSection: React.FC = () => {
  return (
    <div className=" rounded-lg bg-white p-2 flex flex-col gap-4 ">
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

const AgentBasicSettingsSection: React.FC = () => {
  const { formData, setFormData } = useAgentStore();
  const [userInput, setUserInput] = useState<Partial<AgentBasicSettings>>({
    addLabel: formData.addLabel,
    canSuggestReply: formData.canSuggestReply,
    canManageSocial: formData.canManageSocial,
    labels: formData.labels || [],
  });

  const [inputLabel, setInputLabel] = useState("");

  useEffect(() => {
    setFormData({
      addLabel: userInput.addLabel,
      canSuggestReply: userInput.canSuggestReply,
      canManageSocial: userInput.canManageSocial,
      labels: userInput.labels,
    });
  }, [
    userInput.addLabel,
    userInput.canSuggestReply,
    userInput.canManageSocial,
    userInput.labels,
  ]);

  const handleAddLabelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLabel(e.target.value);
  };

  const addLabel = () => {
    if (inputLabel.trim() !== "") {
      setUserInput((prevInput) => ({
        ...prevInput,
        addLabel: true,
        labels: [...(prevInput.labels || []), inputLabel.trim()],
      }));
      setInputLabel(""); // Clear input after adding label
    }
  };

  const deleteLabel = (index: number) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      labels: prevInput.labels?.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="col-span-full md:col-span-1 rounded-lg bg-white h-full md:h-[600px] p-4 overflow-y-auto">
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
              Agents to suggest replies now cost credits. Empower your agent to
              suggest replies to end-users
            </p>
          </div>
          <div className="ml-auto">
            <button
              className={`relative bg-blue-300 w-12 h-6 rounded-full ${
                userInput.canSuggestReply ? "bg-blue-500" : "bg-blue-300"
              }`}
              onClick={() =>
                setUserInput({
                  ...userInput,
                  canSuggestReply: !userInput.canSuggestReply,
                })
              }
            >
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full transition-transform transform ${
                  userInput.canSuggestReply ? "translate-x-full" : ""
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
                userInput.canManageSocial ? "bg-blue-500" : "bg-blue-300"
              }`}
              onClick={() =>
                setUserInput({
                  ...userInput,
                  canManageSocial: !userInput.canManageSocial,
                })
              }
            >
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full transition-transform transform ${
                  userInput.canManageSocial ? "translate-x-full" : ""
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
            <h3 className="text-sm font-bold tracking-wide">Can label tasks</h3>
            <p className="text-gray-500 text-xs tracking-tight">
              Tags the agent can use to label your tasks
            </p>
            {userInput.labels?.map((label, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  className="w-full text-sm border-gray-100 rounded p-2 border-b-[2px] font-bold mr-2"
                  value={label}
                  readOnly
                />
                <button
                  onClick={() => deleteLabel(index)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <RiCloseLine />
                </button>
              </div>
            ))}
            <div className="flex items-center mb-2">
              <input
                type="text"
                className="w-full text-sm border-gray-100 rounded p-2 border-b-[2px] mr-2"
                value={inputLabel}
                onChange={handleAddLabelInput}
                placeholder="Label your tasks.."
              />
              <button
                onClick={addLabel}
                className="text-gray-500 hover:text-green-500"
              >
                <RiAddLine />
              </button>
            </div>
          </div>
        </div>
        <div className="mr-auto">
          <button
            onClick={addLabel}
            className="flex justify-center items-center text-sm  px-4 py-2  bg-black text-white rounded hover:bg-blue-600"
          >
            <RiAddLine className="mr-1" />
            Add label
          </button>
        </div>
      </div>
    </div>
  );
};

const AgentBaseInstructionSection: React.FC = () => {
  const { formData, setFormData } = useAgentStore();
  const [agentInstruction, setAgentInstruction] = useState<string>(
    formData.agentInstruction
  );

  useEffect(() => {
    setFormData({ agentInstruction });
  }, [agentInstruction]);

  const handleTextareaInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAgentInstruction(e.target.value);
  };
  return (
    <div className="col-span-full md:col-span-3 mt-4">
      <div className="flex flex-col gap-4 -mt-10">
        <h3 className="text-lg font-bold tracking-wide text-gray-500">
          Provide initial prompt for your agent
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-4 rounded-lg p-4">
          <div className="rounded-lg p-2">
            <h3 className="text-lg font-semibold tracking-tight text-gray-600">
              Base instruction
            </h3>
            <p className="text-sm text-gray-700">
              Describe the initial prompt for the agent. Provide more
              instruction about how to respond to prompts.
            </p>
            <textarea
              className="w-full text-sm border-gray-100 rounded p-2 border-[2px] mt-4"
              name="initialPrompt"
              placeholder="e.g You are a helpful and honest assistance. If you don't know the answer to a question, please don't respond with false information"
              rows={8}
              cols={50}
              value={formData.agentInstruction}
              onChange={handleTextareaInputChange}
            ></textarea>
          </div>

          <div className="rounded-lg p-2">
            <h3 className="text-lg font-semibold tracking-tight text-gray-600">
              Automate with workflow builder
            </h3>
            <p className="text-sm text-gray-700">
              Use our flow builder to describe generally how your agent should
              make decisions after receiving a task or message.
            </p>
            <div className="flex justify-center items-center mx-auto h-60 border-[2px] border-gray-100 mt-4">
              <button className="bg-black px-4 py-2 text-white rounded-full font-bold">
                Use workflow builder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AgentAdvancedSettingSection: React.FC = () => {
  const { formData, setFormData } = useAgentStore();
  const [welcomeMessage, setWelcomeMessage] = useState<string>(
    formData.agentInstruction
  );
  const [taskName, setTaskName] = useState<string>(formData.taskName);

  useEffect(() => {
    setFormData({ welcomeMessage, taskName });
  }, [welcomeMessage, taskName]);

  const handleWelcomeMessageInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setWelcomeMessage(e.target.value);
  };

  const handleTaskNameInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTaskName(e.target.value);
  };

  return (
    <div className="col-span-full md:col-span-3 mt-4">
      <div className="flex flex-col gap-4 md:mt-4">
        <h3 className="text-lg font-bold tracking-wide text-gray-500">
          Advanced settings
        </h3>
      </div>
      <div className="bg-white rounded-lg border boder-gray-100 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="flex flex-col">
            <h3 className="text-md font-semibold tracking-wide text-gray-500">
              Welcome Message
            </h3>
            <p className="text-sm text-gray-700">
              Provide an opening message for users of the agent, usually
              providing instructions on what sort of task is expected.{" "}
            </p>
            <textarea
              className="w-full  text-sm border-gray-100 rounded p-2 border-[2px]  mt-4"
              name="welcomePrompt"
              placeholder="Enter a welcome message..."
              rows={8}
              cols={50}
              value={welcomeMessage}
              onChange={handleWelcomeMessageInputChange}
            ></textarea>
          </div>
          <div className="flex flex-col">
            <h3 className="text-md font-semibold tracking-wide text-gray-500">
              Instructions for naming tasks
            </h3>
            <p className="text-sm text-gray-700">
              After you create a task, the agent automatically names it. Here
              you can provide additional instructions for how the agent should
              choose a name.
            </p>
            <textarea
              className="w-full  text-sm border-gray-100 rounded p-2 border-[2px] mt-4"
              name="taskNamePrompt"
              placeholder="Enter naming instructions..."
              rows={8}
              cols={50}
              value={taskName}
              onChange={handleTaskNameInputChange}
            ></textarea>
          </div>
          <div className="flex flex-col">
            <h3 className="text-md font-semibold tracking-wide text-gray-500">
              Agent timeout time
            </h3>
            <p className="text-sm text-gray-700">
              How long can an agent work on a task before timing out. Note -
              setting this to 24 hours will cause your agent to have to "wake
              up" when initiating actions.
            </p>
            <div className="flex flex-col  justify-center border  rounded-lg items-center gap-2 p-2 bg-gradient-to-r from-gray-200 to-white mt-8">
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
        </div>
      </div>
    </div>
  );
};

const AgentDescriptionSection: React.FC = () => {
  return (
    <div className=" flex flex-col gap-4">
      <AgentName />
      <LLMSection />
      <AgentTriggerSection />
      <AgentTeamSection />
    </div>
  );
};

const AddToolModal: React.FC<AddToolModalProps> = ({ onClose }) => {
  const { formData, setFormData } = useAgentStore();
  const [addedTools, setAddedTools] = useState<Tool[]>(formData.tools);

  useEffect(() => {
    setFormData({ tools: addedTools });
  }, [addedTools]);

  const addTool = (newTool: Tool) => {
    setAddedTools([...addedTools, newTool]);
  };

  const filteredToolList = toolChain.filter(
    (tool) => !addedTools.find((addedTool) => addedTool.name === tool.name)
  );

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-50 ">
      <div className="bg-white  rounded-lg relative w-full max-w-7xl ">
        <div className="">
          <h3 className="text-xl font-md mb-4 p-4">Configure AI Tools</h3>
          <button
            className="absolute top-0 right-0 mt-1 mr-1 text-gray-500 hover:text-red-500 p-4"
            onClick={onClose}
          >
            <AiOutlineClose />
          </button>
        </div>

        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="search tool"
            className="w-full border border-gray-100 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <AiOutlineSearch className="text-gray-400" />
          </div>
        </div>
        <div className="my-4 flex items-center justify-start overflow-x-auto">
          {formData.tools?.map((tool, index) => (
            <button
              key={index}
              className="mx-2 bg-gray-50 p-2 rounded-lg border font-bold flex items-center space-x-2"
            >
              {React.createElement(tool.icon, {
                size: 20,
                className: "text-blue-500 text-xl",
              })}
              <span>{tool.name}</span>
            </button>
          ))}
        </div>

        <ToolSidebar>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-4 p-8 w-full gap-4">
            {filteredToolList.map((tool, index) => (
              <div
                key={index}
                className=" border-[2px] border-dashed border-gray-200 p-4 rounded-lg"
              >
                <div className="flex flex-col gap-8">
                  <div className="flex items-center space-x-2">
                    <tool.icon size={20} className="text-blue-500 text-xl" />
                    <h3 className="text-md font-semibold">{tool.name}</h3>
                  </div>
                  ...
                  <div className="flex justify-end text-md font-semibold p-2 rounded-lg">
                    <button
                      onClick={() => addTool(tool)}
                      className="bg-gray-50 hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    >
                      <div className="flex items-center">
                        <RiAddLine className="mr-1" />
                        Add Tool
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ToolSidebar>
      </div>
    </div>
  );
};

const ToolSection: React.FC<ToolSectionProps> = ({ openToolModal }) => {
  const { formData } = useAgentStore();
  const [toolsAdded, setToolsAdded] = useState<Tool[]>(formData.tools);

  useEffect(() => {
    setToolsAdded(formData.tools);
  }, [formData.tools]);

  return (
    <div className="col-span-full md:col-span-2 rounded-lg bg-white h-full md:h-[600px] p-8 gap-20 flex flex-col items-center">
      <div className="flex flex-col text-center mx-auto">
        <h3 className="text-2xl font-bold tracking-wide text-black">
          Equip your agents
        </h3>
        <p className="text-gray-500 text-sm max-w-xs">
          Provide more power to your agents by equipping them with tools to
          enhance their skillset
        </p>
      </div>
      {toolsAdded.length > 0 ? (
        <div className="flex flex-wrap justify-center items-center gap-4">
          {toolsAdded.map((tool, index) => (
            <div key={index} className="flex items-center">
              {React.createElement(tool.icon, {
                size: 20,
                className: "text-blue-500 text-xl mr-2",
              })}
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="mx-auto">
          <Image
            src="/images/tools.jpeg"
            alt="Tools image"
            width={200}
            height={200}
            className="z-index-[-200] "
          />
        </div>
      )}
      <button
        onClick={openToolModal}
        className="bg-black text-white p-2 rounded-lg z-index-200 m-8"
      >
        Add tools
      </button>
    </div>
  );
};

const NewAgent = () => {
  const router = useRouter();
  const params = useParams<{ accountId: string; userId: string }>();
  const [showToolModal, setShowToolModal] = useState<boolean>(false);

  const cancelCreateAgent = () => {
    router.push(`/agents/${params.accountId}/${params.userId}/create`);
  };

  const openToolModal = () => {
    setShowToolModal(true);
  };

  const closeToolModal = () => {
    setShowToolModal(false);
  };

  return (
    <Sidebar>
      <div className="ml-0 md:ml-60 bg-blue-50 rounded-lg  ">
        <div className="flex justify-between items-center bg-white p-2">
          <button
            onClick={cancelCreateAgent}
            className="bg-gray-200 pt-2 pb-2 px-4 font-semibold rounded-md "
          >
            Cancel
          </button>
          <button className="bg-blue-500 pt-2 pb-2 font-semibold text-white rounded-md w-40">
            Create Agent <span className="ml-1">&gt;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4  gap-4 p-4  rounded-lg ">
          <AgentDescriptionSection />
          <ToolSection openToolModal={openToolModal} />
          <AgentBasicSettingsSection />
          <div></div>
          <AgentBaseInstructionSection />
          <div></div>
          <AgentAdvancedSettingSection />
        </div>
      </div>

      {showToolModal && <AddToolModal onClose={closeToolModal} />}
    </Sidebar>
  );
};

export default NewAgent;
