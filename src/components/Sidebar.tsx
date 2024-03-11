"use client";
import Link from "next/link";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineMenu, HiOutlineShoppingBag } from "react-icons/hi";
import { FiDatabase, FiSettings } from "react-icons/fi";
import { RiKeyLine } from "react-icons/ri";
import { BiQuestionMark } from "react-icons/bi";
import { BsClockHistory } from "react-icons/bs";
import { IoReceipt } from "react-icons/io5";
import { useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useClickAway } from "react-use";

const Sidebar = ({
  children,
}: React.PropsWithChildren<{ children: React.ReactNode }>) => {
  const params = useParams<{ accountId: string; userId: string }>();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  useClickAway(sidebarRef, () => closeSidebar());
  return (
    <>
      <button
        className="md:hidden absolute top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        <HiOutlineMenu className="h-8 w-8 text-gray-500" />
      </button>
      <div
        ref={sidebarRef}
        className={`md:flex h-screen p-2 border-r-[1px] ${
          sidebarOpen ? "block" : "hidden"
        } md:block w-30 md:w-60 fixed top-0 left-0 bg-white z-50`}
      >
        <div className="flex flex-col items-center">
          <Link href={`/agents/${params.accountId}/${params.userId}`}>
            <div className="flex items-center bg-pink-600 text-white p-3 rounded-lg">
              <RxSketchLogo size={20} />
              <span className="ml-2">Evveland AI</span>
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href={`/agents/${params.accountId}/${params.userId}`}>
            <div
              className={`hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center`}
            >
              <RxDashboard size={20} /> <span className="ml-2">Project A</span>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className=" hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center ">
              <RxPerson size={20} /> <span className="ml-2">Agents</span>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className=" hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center ">
              <BsClockHistory size={20} />{" "}
              <span className="ml-2">Activity</span>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className=" hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center ">
              <HiOutlineShoppingBag size={20} />{" "}
              <span className="ml-2">Tools</span>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className=" hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center ">
              <FiDatabase size={20} /> <span className="ml-2">Data</span>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className=" hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center ">
              <RiKeyLine size={20} /> <span className="ml-2">API keys</span>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className=" hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center ">
              <IoReceipt size={20} /> <span className="ml-2">Billings</span>
            </div>
          </Link>

          <Link href="/dashboard">
            <div className=" hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center ">
              <BiQuestionMark size={20} />{" "}
              <span className="ml-2"> Support</span>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className=" hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center ">
              <FiSettings size={20} /> <span className="ml-2"> Settings</span>
            </div>
          </Link>
        </div>
      </div>
      <div
        className={`ml-${sidebarOpen ? "40" : "0"} md:ml-${
          sidebarOpen ? "60" : "0"
        } transition-all p-8 mt-4`}
      >
        {children}
      </div>
    </>
  );
};

export default Sidebar;
