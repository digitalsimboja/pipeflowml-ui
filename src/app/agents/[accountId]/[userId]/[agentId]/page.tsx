"use client";
import { RiAddLine } from "react-icons/ri";
import { BsShare } from "react-icons/bs";
import useAgentStore from "src/store/AgentStore";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

const UserAgent: React.FC = () => {
  const { formData } = useAgentStore();
  const [addedTools] = useState(formData.tools);
  const params = useParams<{ accountId: string; userId: string }>();
  const router = useRouter();

  const goToCreateNewAgent = () => {
    router.push(`/agents/${params.accountId}/${params.userId}/create/new`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 ">
      <div className="col-span-1 flex flex-col bg-gray-50 border-r-2 rounded-r h-full md:h-screen p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm ">
            <button onClick={goToCreateNewAgent}>
              &lt; <span className="ml-1">Back</span>
            </button>
          </div>
          <div className="flex items-center bg-gray-200 p-1 rounded:lg text-sm ">
            <RiAddLine />
            <button className="ml-1">New Task</button>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 p-2 text-sm h-full md:h-screen">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Agent Name</h3>
          <div className="flex justify-between items-center gap-2">
            <div>
              <button className="rounded  bg-gray-100 p-1">Edit Agent</button>
            </div>
            <div className="flex items-center bg-gray-100 rounded p-1 ml-2">
              <BsShare />
              <button className="ml-2 ">Share</button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1 flex flex-col bg-gray-50 border-l-2 rounded-l h-full md:h-screen p-4">
        <div className="bg-yellow-50 text-xs mb-2">
          <h3 className="text-red-500">
            You are on free plan. Upgrade to premium to unlock multiple tasks
          </h3>
        </div>
        <div className="mb-2">
          <h3 className="font-bold text:sm">Agent Tools</h3>
        </div>
      
        <div>
          {addedTools.map((tool, index) => (
            <div key={index} className="flex items-center mb-2">
              <span className="mr-2">{tool.icon as React.ReactNode}</span>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserAgent;
