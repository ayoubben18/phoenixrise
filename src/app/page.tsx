import { BackgroundBeams } from "@/components/ui/background-beams";
import HeroSection from "@/components/HeroSection";
import Identity from "@/components/Identity";
import GetStarted from "@/components/GetStarted";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Faq from "@/components/Faq";
import ConnectWithUs from "@/components/CoonectWithUs";

export default function Home() {
  return (
    <main className=" mx-auto flex min-h-screen flex-col items-center justify-between">
      <div className="relative w-full flex justify-center items-center ">
        <HeroSection />
        <BackgroundBeams className="absolute bottom-0" />
      </div>
      <div className=" bg-[#11181e] w-full flex justify-center items-center">
        <Identity />
      </div>
      <Services />
      <div className=" bg-[#11181e] w-full flex justify-center items-center">
        <AboutUs />
      </div>
      <GetStarted />
      <div className=" bg-[#11181e] w-full flex justify-center items-center">
        <Faq />
      </div>
      <ConnectWithUs />
    </main>
  );
}
