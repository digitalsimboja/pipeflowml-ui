import React from "react";
import { RiAddLine } from "react-icons/ri";

const TopCard = () => {
  return (
    <div className="ml-16 p-4">
      <h1 className="text-black font-semibold tracking-wide text-lg">
        Your AI Work Agents
      </h1>
      <div className="flex justify-between mt-8">
        <div className="flex flex-col max-w-3xl">
          <h2 className="text-gray-600 font-semibold tracking-wide mb-2">
            What are AI agents?
          </h2>
          <p className="text-md text-gray-500">
            AI agents created on Evveland are your workforce, equipped with
            tools and skillset required to perform specific and personalized
            tasks or services independently or semi-independently without direct
            human intervention.
          </p>
        </div>

        <div>
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <RiAddLine className="mr-1" />
            Create Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
