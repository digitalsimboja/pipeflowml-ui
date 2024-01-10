import Image from "next/image";
const Hero = () => {
  return (
    <div className="mt-16 py-2 px-4 flex justify-around items-center">
      <div className="flex flex-col justify-center md:max-w-xl">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 whitespace-pre-line leading-tight">
          Evveland AI, Generative AI Platform for the Metaverse
        </h1>
        <p className="text-sm text-gray-500">
          Create and Deploy custom AI Agents, Chatbots and Virtual Assistants
          using your business content.
        </p>
      </div>
      <div className="flex-shrink-0">
        <Image
          width={600}
          height={600}
          src="/images/hero_image.png"
          alt="Evveland AI platform Landing page image"
          className="w-full border-none"
        />
      </div>
    </div>
  );
};

export default Hero;
