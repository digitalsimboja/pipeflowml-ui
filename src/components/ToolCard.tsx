import { RiAddLine } from "react-icons/ri";

const ToolCard = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between mt-8 ml-4 md:ml-16 p-8">
        <div className="flex flex-col max-w-full md:max-w-3xl">
          <h2 className="text-black font-semibold tracking-wide text-md">
            What are AI Agent Tools
          </h2>
          <p className="text-md text-gray-500">
            AI agent tools are a set of toolsets or skillsets that enhance the
            capabilities of your AI agents. Imagine granting your AI agent the
            capability to read and respond to your emails, promote your business
            on your social channels while ensuring your workflows are monitored
            24/7 without human intervention.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="flex items-center px-4 py-2 bg-black text-white rounded hover:bg-blue-600">
            <RiAddLine className="mr-1" />
            Create Tool
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 ml-4 md:ml-16 p-8 mt-4 gap-4">
        <div className="border p-4">Frame 1</div>
        <div className="border p-4">Frame 2</div>
        <div className="border p-4">Frame 3</div>
      </div>
    </>
  );
};

export default ToolCard;
