import { ButtonProps } from "./button";

const GetStartedButton = (props: ButtonProps) => {
    return (
        <button className="flex items-center bg-green-200 text-black p-2 mt-4 rounded w-max">{props.text}</button>
    )
}

export default GetStartedButton;