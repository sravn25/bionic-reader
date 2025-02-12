import BionicController from "@/components/BionicText/Controller";
import About from "@/components/Footer/about";
import Navbar from "@/components/Header/navbar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <BionicController />
      </div>
      <About />
    </div>
  );
}
