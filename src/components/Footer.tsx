/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cUPAqCqB1Vm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Component() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between flex-wrap items-center">
          <div className="mb-6 flex flex-col space-y-4">
            <Image
              src={"/logo.png"}
              width={75}
              height={75}
              priority
              alt="logo"
            />
            <p className="max-w-xs text-sm text-gray-600">
              Stay up to date on our latest features and releases by joining our
              newsletter.
            </p>
            <form className="flex">
              <Input
                className="border-2 border-gray-300 rounded-l-md p-2 mr-1"
                placeholder="Your email address"
              />
              <Button className="rounded-r-md px-4">Subscribe</Button>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2 mt-4 space-y-1">
              <h6 className="font-bold">Follow us</h6>
              <div className="flex flex-wrap space-x-4 justify-center">
                <Link
                  className="text-gray-600 flex items-center space-x-2"
                  href="#"
                >
                  <FacebookIcon className="h-4 w-4" />
                  <span>Facebook</span>
                </Link>
                <Link
                  className="text-gray-600 flex items-center space-x-2"
                  href="https://www.instagram.com/boostmedia1.ma/?hl=fr"
                  target="_blank"
                >
                  <InstagramIcon className="h-4 w-4" />
                  <span>Instagram</span>
                </Link>
                <Link
                  className="text-gray-600 flex items-center space-x-2"
                  href="#"
                >
                  <XIcon className="h-4 w-4" />
                  <span>X</span>
                </Link>
                <Link
                  className="text-gray-600 flex items-center space-x-2"
                  href="#"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span>LinkedIn</span>
                </Link>
                <Link
                  className="text-gray-600 flex items-center space-x-2"
                  href="#"
                >
                  <YoutubeIcon className="h-4 w-4" />
                  <span>Youtube</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 py-6 mt-10 text-center text-xs text-gray-600">
          <p>© 2024 Relume. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link className="text-gray-600" href="#">
              Privacy Policy
            </Link>
            <Link className="text-gray-600" href="#">
              Terms of Service
            </Link>
            <Link className="text-gray-600" href="#">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function FacebookIcon(props: any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function YoutubeIcon(props: any) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
