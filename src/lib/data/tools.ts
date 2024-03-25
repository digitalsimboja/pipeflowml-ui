import { BsSearch } from "react-icons/bs";
import { FaFileInvoice } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { IoLogoYoutube } from "react-icons/io5";
import { MdOutlineMarkEmailUnread, MdPictureAsPdf } from "react-icons/md";
import { IntegratedTool } from "src/GraphQLComponents";
import { GiArtificialIntelligence } from "react-icons/gi";

export const toolChain = [
    { name: "Industry Research", icon: BsSearch, tool: IntegratedTool.IndustryResearch},
    { name: "Email Responder", icon: MdOutlineMarkEmailUnread, tool: IntegratedTool.EmailResponder },
    { name: "YouTube Transcriber", icon: IoLogoYoutube, tool: IntegratedTool.YouTubeTranscriber },
    { name: "Extract Data from PDF", icon: MdPictureAsPdf, tool: IntegratedTool.ExtractDataFromPdf },
    { name: "Invoice Generator Assistant", icon: FaFileInvoice, tool: IntegratedTool.InvoiceGeneratorAssistant },
    { name: "Marketing Rep", icon: FcBusinessman, tool: IntegratedTool.MarketingRep},
    {name: "Evveland AI", icon: GiArtificialIntelligence, tool: IntegratedTool.EvvelandAi }
]
