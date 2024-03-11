import Image from "next/image";
import GetStartedButton from "./common/getStartedButton";
import LiveDemoButton from "./common/liveDemoButton";


const Hero = () => {


  return (
    <div className="mt-16 px-4 py-8 md:flex md:justify-around items-center relative z-0">
      <div className="max-w-xl text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 whitespace-pre-line leading-tight">
          Evveland AI, Generative AI Platform for the Metaverse
        </h1>
        <p className="text-sm text-gray-500 mb-4">
          Create and Deploy custom AI Agents, Chatbots and Virtual Assistants
          using your business content.
        </p>
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-4">
          <GetStartedButton text="Get Started" />
          <LiveDemoButton text="Live Demo" />
        </div>
      </div>
      <div className="flex-shrink-0">
        <Image
          width={600}
          height={600}
          src="/images/hero_image.png"
          alt="Evveland AI platform Landing page image"
          className="w-full border-none rounded"
        />
      </div>
    </div>
  );
};

export default Hero;
