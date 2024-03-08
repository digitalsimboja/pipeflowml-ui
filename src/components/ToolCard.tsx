import { HiOutlineCheckCircle, HiOutlineDocumentText } from "react-icons/hi";
import { RiAddLine } from "react-icons/ri";
import Image from "next/image";

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

      <div className="ml-4 md:ml-16 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Image
              src="/images/tools_preview.png"
              alt="Tools Preview"
              width={400}
              height={140}
              objectFit="cover"
            />
            <div className="flex items-center space-x-2 text-gray-500">
              <HiOutlineDocumentText size={20} />
              <h3 className="text-sm text-gray-700">Create custom tool</h3>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/images/tool_builder.png"
              alt="Tools Builder"
              width={400}
              height={140}
              objectFit="cover"
            />
            <div className="flex items-center space-x-2 text-gray-500">
              <HiOutlineCheckCircle size={20} />
              <h3 className="text-sm text-gray-700">Use tools integrations</h3>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/images/add_tools.png"
              alt="Add tools"
              width={400}
              height={140}
              objectFit="cover"
            />
            <div className="flex items-center space-x-2 text-gray-500">
              <RiAddLine size={20} />
              <h3 className="text-sm text-gray-700">Empower your agents</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolCard;
