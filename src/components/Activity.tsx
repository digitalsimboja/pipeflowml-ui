import TopCard from "./TopCard";

const Activity = () => {
  const ActivityCard = () => {
    return (
      <div className="ml-16 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl ">
          <div className="flex flex-col gap-2">
            <div className="border rounded-lg flex flex-col pl-4 gap-4 pt-4">
              <div className="border rounded border-gray-200 p-2 flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                <h2 className="text-blue-500 font-bold text-sm">
                  Speed Dating: Company Profile Matcher
                </h2>
              </div>
              <div className="border rounded border-gray-200 p-2 flex items-center">
                <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                <h2 className="text-blue-500 font-bold text-sm">
                  Billing History: Track company annuals
                </h2>
              </div>
              <div className="border rounded border-gray-200 p-2 flex items-center">
                <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                <h2 className="text-blue-500 font-bold text-sm">
                  Deploy custom GPT
                </h2>
              </div>
            </div>
            <div>
              <h3 className="text-sm tex">Complete tasks at scale</h3>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="border rounded-lg"></div>
            <div>
              <h3>Construct your agents with tools or skillset</h3>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="border rounded-lg"></div>
            <div>
              <h3>Employ our tools and integrations</h3>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <TopCard />
      <ActivityCard />
    </>
  );
};

export default Activity;
