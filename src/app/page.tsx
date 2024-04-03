import Image from "next/image";
import {Nav} from "@/components/NavigationMenuDemo";
import {HeroSection} from "@/components/HeroSection";
import {AboutUs} from "@/components/AboutUs";
import {Services} from "@/components/Services";
import {ContactUs} from "@/components/ContactUs";
import {Footer} from "@/components/Footer";

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-between">
        <Nav/>
        <HeroSection/>
        <AboutUs/>
        <Services />
        <ContactUs/>

    </main>
  );
}
