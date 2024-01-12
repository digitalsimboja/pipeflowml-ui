import Image from "next/image";
import GetStartedButton from "./common/getStartedButton";
import LiveDemoButton from "./common/liveDemoButton";

const Hero = () => {
  return (
    <div className="mt-8 px-4 flex flex-col items-center">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold mb-2 text-center">
          Evveland AI, Generative AI Platform for the Metaverse
        </h1>
        <p className="text-sm text-gray-500 text-center">
          Create and Deploy custom AI Agents, Chatbots and Virtual Assistants
          using your business content.
        </p>
      </div>
      <div className="flex flex-col items-center mb-4">
        <Image
          width={300}
          height={300}
          src="/images/hero_image.png"
          alt="Evveland AI platform Landing page image"
          className="w-full border-none rounded"
        />
      </div>
      <div className="flex flex-col items-center mb-4">
        <div className="flex flex-col items-center gap-4">
          <GetStartedButton text="Get Started" />
          <LiveDemoButton text="Live Demo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
