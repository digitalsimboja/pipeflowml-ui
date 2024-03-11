import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import Hero from "src/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-white relative z-10">
      <div className="flex-grow">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
