import Sidebar from "src/components/Sidebar";
import TopCard from "src/components/TopCard";
import AgentCard from "src/components/dashboard/agents/AgentCard";
import ToolCard from "src/components/dashboard/tools/ToolCard";

const Agent = () => {
    return (
       <Sidebar>
       <TopCard />
       <AgentCard />
       <ToolCard />
       </Sidebar>
    )
}

export default Agent;