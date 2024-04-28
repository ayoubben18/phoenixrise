/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rnjJ0GTfrfb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div
      className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24"
      id="team"
    >
      <div className="relative max-w-xl mx-auto">
        <svg
          aria-hidden="true"
          className="absolute left-full transform translate-x-1/2"
          fill="none"
          height="404"
          viewBox="0 0 404 404"
          width="404"
        >
          <defs>
            <pattern
              height="20"
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              patternUnits="userSpaceOnUse"
              width="20"
              x="0"
              y="0"
            >
              <rect
                className="text-gray-200"
                fill="currentColor"
                height="4"
                width="4"
                x="0"
                y="0"
              />
            </pattern>
          </defs>
          <rect
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            height="404"
            width="404"
          />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          fill="none"
          height="404"
          viewBox="0 0 404 404"
          width="404"
        >
          <defs>
            <pattern
              height="20"
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              patternUnits="userSpaceOnUse"
              width="20"
              x="0"
              y="0"
            >
              <rect
                className="text-gray-200"
                fill="currentColor"
                height="4"
                width="4"
                x="0"
                y="0"
              />
            </pattern>
          </defs>
          <rect
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            height="404"
            width="404"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our team
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Meat our team behind the scenes
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-gray-500 rounded-md shadow-lg">
                    <Avatar>
                      <AvatarImage
                        alt="Team member"
                        src="/placeholder.svg?height=40&width=40"
                      />
                      <AvatarFallback>PH</AvatarFallback>
                    </Avatar>
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  Ayoub Bensalah
                </h3>
                <p className="mt-5 text-base text-gray-500">Job title</p>
                <p className="mt-5 text-base text-gray-500">
                  Technical Stuff, design coding{" "}
                </p>
                <div className="flex gap-2 mt-2">
                  <LinkedinIcon className="h-6 w-6 text-gray-400" />
                  <TwitterIcon className="h-6 w-6 text-gray-400" />
                  <GithubIcon className="h-6 w-6 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-gray-500 rounded-md shadow-lg">
                    <Avatar>
                      <AvatarImage
                        alt="Team member"
                        src="/placeholder.svg?height=40&width=40"
                      />
                      <AvatarFallback>PH</AvatarFallback>
                    </Avatar>
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  Yasser Elhaddad
                </h3>
                <p className="mt-5 text-base text-gray-500">Job title</p>
                <p className="mt-5 text-base text-gray-500">
                  Soft Skills and communication
                </p>
                <div className="flex gap-2 mt-2">
                  <LinkedinIcon className="h-6 w-6 text-gray-400" />
                  <TwitterIcon className="h-6 w-6 text-gray-400" />
                  <GithubIcon className="h-6 w-6 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GithubIcon(props: any) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
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

function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
