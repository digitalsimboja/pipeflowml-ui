import { BsSearch } from "react-icons/bs";
import { FaFileInvoice } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { IoLogoYoutube } from "react-icons/io5";
import { MdOutlineMarkEmailUnread, MdPictureAsPdf } from "react-icons/md";
import { ToolType } from "src/GraphQLComponents";
import { GiArtificialIntelligence } from "react-icons/gi";
import { AiOutlineDisconnect } from "react-icons/ai";

export const toolChain = [
    { name: "Industry Research", icon: BsSearch, tool: ToolType.IndustryResearch },
    { name: "Email Responder", icon: MdOutlineMarkEmailUnread, tool: ToolType.EmailResponder },
    { name: "YouTube Transcriber", icon: IoLogoYoutube, tool: ToolType.YouTubeTranscriber },
    { name: "Extract Data from PDF", icon: MdPictureAsPdf, tool: ToolType.ExtractDataFromPdf },
    { name: "Invoice Generator Assistant", icon: FaFileInvoice, tool: ToolType.InvoiceGeneratorAssistant },
    { name: "Marketing Rep", icon: FcBusinessman, tool: ToolType.MarketingRep },
    { name: "Evveland AI", icon: GiArtificialIntelligence, tool: ToolType.Evveland },
    { name: "Match Maker", icon: AiOutlineDisconnect, tool: ToolType.MatchMaker}
]



export const initializeIntegratedTools = (): ToolType[] => {
    const integratedTools: ToolType[] = toolChain
        .filter(tool => Object.values(ToolType).includes(tool.tool))
        .map(tool => tool.tool);

    return integratedTools;
};