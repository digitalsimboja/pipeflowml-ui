import { HiOutlineCheckCircle } from "react-icons/hi";
import {
  FaChalkboardTeacher,
  FaClosedCaptioning,
  FaTools,
} from "react-icons/fa";
import { AiOutlineAudio } from "react-icons/ai";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Image from "next/image";

const AgentCard = () => {
  return (
    <div className="ml-0 md:ml-80 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl ">
        <div className="flex flex-col gap-2 ">
          <div className="border rounded-lg flex flex-col pl-4 gap-2 pt-4  h-full ">
            <div className="border rounded border-gray-200 p-2 flex items-center">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
              <h2 className="text-blue-500 font-bold text-sm">
                Company Speed-Dating
              </h2>
            </div>
            <div className="border rounded border-gray-200 p-2 flex items-center">
              <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
              <h2 className="text-blue-500 font-bold text-sm">
                Sales promotion and tracking
              </h2>
            </div>
            <div className="border rounded border-gray-200 p-2 flex items-center">
              <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
              <h2 className="text-blue-500 font-bold text-sm">
                Deploy custom GPT
              </h2>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <HiOutlineCheckCircle size={20} />
            <h3 className="text-sm text-gray-700">
              Define the resume for your agent
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-between">
          <div className="border rounded-lg h-full flex items-center justify-center">
            <Image
              src="/images/ml-workflow.svg"
              alt="Machine Learning workflow"
              width={400}
              height={140}
              objectFit="cover"
            />
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <FaChalkboardTeacher size={20} />
            <h3 className="text-sm text-gray-700">
              Teach your AI agent using your data
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-between ">
          <div className="border border-gray-200  rounded-lg h-full flex flex-col gap-2 p-4 ">
            <h4 className="text-sm text-black font-semibold">
              Tools & Integrations
            </h4>
            <p className="text-xs text-gray-500">Need to empower your agent?</p>

            <div className="flex flex-row gap-2 mt-2 items-center mb-2">
              <div className="flex border border-gray-200 rounded-lg  ">
                <AiOutlineAudio
                  className="w-4 h-4 mr-2 text-green-700"
                  size={20}
                />
                <h4 className="text-xs font-semibold">Text-to-Speech </h4>
              </div>
              <div className="flex border border-gray-200 rounded-lg ">
                <FaClosedCaptioning
                  className="h2-w-2 mr-2 text-red-700 "
                  size={20}
                />
                <h4 className="text-xs font-semibold">
                  Youtube video transcriber{" "}
                </h4>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 overflow-hidden">
              <div className="bg-gray-200 h-full flex flex-col gap-1 mb-2 pl-2">
                <h3 className="text-blue-500 text-sm tracking-wide">
                  Evveland Tools
                </h3>
                <h3 className="text-xs text-gray-500">Your custom tools</h3>
                <div className="flex items-center">
                  <h3 className="text-xs text-gray-500 mr-2">Most used</h3>
                  <span className="text-xs bg-gray-500 w-4 h-4 rounded-md flex items-center justify-center text-black font-bold border">
                    4
                  </span>
                </div>
              </div>

              <div className="border-gray-200 rounded-md p-2">
                <div className="flex border border-gray-200 rounded-md items-center ">
                  <MdOutlineMarkEmailUnread
                    className="w-4 h-4 mr-2 text-green-700"
                    size={20}
                  />
                  <h4 className="text-sm font-semibold">Email Responder </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-gray-500">
            <FaTools size={20} />
            <h3 className="text-sm text-gray-700">
              Equip your agent with tools & integrations
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
