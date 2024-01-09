import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex  bg-white overflow-hidden justify-around z-[1000] items-center gap-28 md:px-10 py-2 px-3 cursor-pointer w-full ease-in-out transition-all relative">
      <Link href="/">
        <Image
          width={120}
          height={100}
          src="/images/evveland_ai_agent_logo.png"
          alt="Evveland AI platform logo"
        />
      </Link>
      <div className="flex justify-between gap-8 items-center font-bold">
        <Link href="">Solutions</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Talk to us</Link>
      </div>
      <div className="flex justify-between font-bold">
        <Link href="/login"><button className="py-2 px-4 rounded-full bg-gray-100">Login</button></Link>
        <Link href="/signup"><button className="py-2 px-4 rounded-full bg-green-100">Signup</button></Link>

      </div>
    </nav>
  );
};

export default Navbar;
