const ToolSidebar = ({
    children,
  }: React.PropsWithChildren<{ children: React.ReactNode }>) => {
    return (
      <div className="flex">
        <div className="flex flex-col items-start p-4 gap-2 h-full">
          <button className="text-sm text-pink-700 font-bold hover:text-pink-500">
            Evveland AI tools
          </button>
          <button className="text-sm text-gray-500 font-bold hover:gray-900">
            Your Custom Tools
          </button>
          <span className="border-b-[1px] border-white w-full p-2"></span>
          <button className="text-gray-500 font-bold">
            Integrations{" "}
            <span className="p-1 bg-gray-300 ml-2 rounded-full">4</span>
          </button>
          <button className="text-gray-500 font-bold">
            Marketing{" "}
            <span className="p-1 bg-gray-300 ml-2 rounded-full">17</span>
          </button>
          <button className="text-gray-500 font-bold">
            Sales <span className="p-1 bg-gray-300 ml-2 rounded-full">13</span>
          </button>
          <button className="text-gray-500 font-bold">
            Research tools{" "}
            <span className="p-1 bg-gray-300 ml-2 rounded-full">6</span>
          </button>
          <button className="text-gray-500 font-bold">
            Sales integrations{" "}
            <span className="p-1 bg-gray-300 ml-2 rounded-full">14</span>
          </button>
          <button className="text-gray-500 font-bold">
            Operations{" "}
            <span className="p-1 bg-gray-300 ml-2 rounded-full">8</span>
          </button>
          <button className="text-gray-500 font-bold">
            General Knowledge{" "}
            <span className="p-1 bg-gray-300 ml-2 rounded-full">13</span>
          </button>
          <button className="text-gray-500 font-bold">
            Others <span className="p-1 bg-gray-300 ml-2 rounded-full">14</span>
          </button>
        </div>
        <div className="ml-20">{children}</div>
      </div>
    );
  };
  
  export default ToolSidebar;
  