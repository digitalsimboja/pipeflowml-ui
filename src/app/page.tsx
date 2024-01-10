import Navbar from "src/components/Navbar";
import Hero from "src/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <div className="flex-grow">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
