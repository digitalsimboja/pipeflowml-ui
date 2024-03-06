import Link from "next/link";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiDatabase, FiSettings } from "react-icons/fi";
import { RiKeyLine } from "react-icons/ri";
import { BiQuestionMark } from "react-icons/bi";
import { BsClockHistory } from "react-icons/bs";
import { IoReceipt } from "react-icons/io5";

const Sidebar = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="">
      <div className="fixed w-50 h-screen p-4 border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/dashboard">
            <div className="flex items-center bg-pink-600 text-white p-3 rounded-lg">
              <RxSketchLogo size={20} />
              <span className="ml-2">Evveland AI</span>
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/dashboard">
            <div className=" hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center w-40 ">
              <RxDashboard size={20} /> <span className="ml-2">Project A</span>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className=" hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center w-40">
              <RxPerson size={20} /> <span className="ml-2">Agents</span>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className=" hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center w-40">
              <BsClockHistory size={20} />{" "}
              <span className="ml-2">Activity</span>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className=" hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center w-40">
              <HiOutlineShoppingBag size={20} />{" "}
              <span className="ml-2">Tools</span>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className=" hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center w-40">
              <FiDatabase size={20} /> <span className="ml-2">Data</span>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className=" hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center w-40">
              <RiKeyLine size={20} /> <span className="ml-2">API keys</span>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className=" hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center w-40">
              <IoReceipt size={20} /> <span className="ml-2">Billings</span>
            </div>
          </Link>
          
          <Link href="/dashboard">
            <div className=" hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center w-40">
              <BiQuestionMark size={20} />{" "}
              <span className="ml-2"> Support</span>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className=" hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center w-40">
              <FiSettings size={20} /> <span className="ml-2"> Settings</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="ml-56">{children}</div>
    </div>
  );
};

export default Sidebar;
