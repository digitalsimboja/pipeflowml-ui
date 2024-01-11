import Navbar from "src/components/Navbar";
import Footer from "src/components/footer";
import Hero from "src/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white relative z-10">
      <div className="flex-grow">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
