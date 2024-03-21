import { IntegratedTool } from "src/GraphQLComponents";

export const toolList = [
    { name: "Industry Research", },
    { name: "Email Responder", },
    { name: "YouTube Transcriber", },
    { name: "Extract Data from PDF", },
    { name: "Invoice Generator Assistant", },
    { name: "Marketing Rep", },
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
