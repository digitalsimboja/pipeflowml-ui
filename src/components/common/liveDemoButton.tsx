import { ButtonProps } from "./button";
const LiveDemoButton = (props: ButtonProps) => {
    return (
        <button className="flex items-center outline-none text-white p-2 mt-4 rounded w-max text-xl">{props.text}</button>
    )
}

export default LiveDemoButton;