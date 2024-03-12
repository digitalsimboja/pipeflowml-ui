"use client";
import Link from "next/link";
import React from "react";
import { RiAddLine } from "react-icons/ri";
import { useParams } from "next/navigation";

const TopCard = () => {
  const params = useParams<{ accountId: string; userId: string }>();
  return (
    <div className="flex flex-col md:flex-row justify-between mt-8 ml-0 md:ml-80 p-4">   
      <div className="flex flex-col max-w-3xl md:w-2/3">
        <h2 className="text-gray-600 font-semibold tracking-wide mb-2">
          What are AI agents?
        </h2>
        <p className="text-md text-gray-500">
          AI agents created on Evveland serve as your workforce, equipped with
          the tools and skillsets required to perform specific and personalized
          tasks or services independently or semi-independently, without direct
          human intervention.
        </p>
      </div>
      <div className="mt-4 md:mt-0 md:ml-4 ">
        <Link href={`/templates/${params.accountId}/${params.userId}`} >
          <button className="flex justify-center items-center w-full px-4 py-2 bg-black text-white rounded hover:bg-blue-600">
            <RiAddLine className="mr-1" />
            Create Agent
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopCard;
