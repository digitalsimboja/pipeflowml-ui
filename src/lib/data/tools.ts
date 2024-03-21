import { BsSearch } from "react-icons/bs";
import { FaFileInvoice } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { IoLogoYoutube } from "react-icons/io5";
import { MdOutlineMarkEmailUnread, MdPictureAsPdf } from "react-icons/md";
import { IntegratedTool } from "src/GraphQLComponents";

export const toolList = [
    { name: "Industry Research", icon: BsSearch },
    { name: "Email Responder", icon: MdOutlineMarkEmailUnread },
    { name: "YouTube Transcriber", icon: IoLogoYoutube },
    { name: "Extract Data from PDF", icon: MdPictureAsPdf },
    { name: "Invoice Generator Assistant", icon: FaFileInvoice },
    { name: "Marketing Rep", icon: FcBusinessman },
]

export const initializeIntegratedTools = () => {
    const integratedTools: IntegratedTool[] = toolList.map((tool) => {
        switch (tool.name) {
            case "Industry Research":
                return IntegratedTool.Evvelandai;
            case "Email Responder":
                return IntegratedTool.Emailtoool;
            case "YouTube Transcriber":
                return IntegratedTool.YoutubeVideoTranscription;

            default:
                throw new Error(`Unknown tool: ${tool.name}`);
        }
    });

    return integratedTools;
};
