import { HeroSection } from "@/components/HeroSection";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { ContactUs } from "@/components/ContactUs";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-between">
      <div className="z-10">
        <HeroSection />
        <AboutUs />
        <Services />
        <ContactUs />
      </div>
      <BackgroundBeams />
    </main>
  );
}
