/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nSzBdM1uahp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={50}
              height={50}
              priority
              alt="logo"
            />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link className="text-gray-600 hover:text-gray-900" href="#about">
              About Us
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#team">
              Our Team
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900"
              href="#innovation"
            >
              Solutions
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Link href={"#form"}>Contact Us</Link>
          </Button>{" "}
          <Button>
            <Link href={"#services"}>Services</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
