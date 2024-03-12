"use client";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaFileInvoice, FaTools } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { MdOutlineMarkEmailUnread, MdPictureAsPdf } from "react-icons/md";
import Sidebar from "src/components/Sidebar";

const Templates = () => {
  const [templateList] = useState([
    { name: "Industry Research", icon: BsSearch },
    { name: "Email Responder", icon: MdOutlineMarkEmailUnread },
    {name: 'YouTube Transcriber', icon: IoLogoYoutube},
    {name: 'Extract Data from PDF', icon: MdPictureAsPdf},
    {name: 'Invoice Generator Assistant', icon: FaFileInvoice},
    {name: 'Marketing Rep', icon: FcBusinessman},
    {name: 'Create from Scratch', icon: FaTools}

  ]);
  return (
    <Sidebar>
      <div className="ml-0 md:ml-60">
        <h3 className="text-sm md:text-lg font-semibold tracking-wide">
          Craft new Agents using templates
        </h3>
        <span className="block border-b border-gray-200 w-full my-2"></span>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 p-8 w-full gap-4">
          {templateList.map((item, index) => (
            <div key={index} className="border border-gray-200 p-4 rounded-lg">
              <div className="flex flex-col gap-8">
                <div className="flex items-center space-x-2">
                  <item.icon size={20} className="text-gray-500 text-xl" />
                  <h3 className="text-md font-semibold">{item.name}</h3>
                </div>
                ...
                <div className="text-md font-semibold p-2 rounded-lg">
                  <button className="bg-gray-200 hover:bg-pink-600 text-pink-500 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    {item.name == 'Create from Scratch' ? 'Create from Scratch': item.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Sidebar>
  );
};

export default Templates;
