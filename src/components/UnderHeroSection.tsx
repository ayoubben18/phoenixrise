/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gzorhrS4ZEM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Component() {
  return (
    <div className="max-w-6xl mx-auto p-8" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="hidden md:flex justify-center items-center">
          <div className=" w-full h-64 flex justify-center items-center">
            <Image
              alt="Placeholder"
              className="max-h-96 max-w-full"
              height="1000"
              src="/growth.png"
              style={{
                aspectRatio: "1000/1000",
                objectFit: "cover",
              }}
              width="1000"
              priority
            />
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Unlock Your Business's Full Potential with BoostMedia
          </h1>
          <p className="mb-6">
            We're BoostMedia, right here in Morocco. Think of us as your
            friendly neighborhood team that helps your business get noticed
            online. Everyone's online these days, and we make sure they find
            you. We know what makes Morocco special, and we use that to help
            your brand. We're all about getting your message out there so you
            can grow. Simple websites, cool social media posts, and videos that
            show off what you do - that's what we're good at.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <TrendingUpIcon className="h-6 w-6 mb-2" />
              <h2 className="font-semibold mb-2">Increase Sales</h2>
              <p className="text-sm">
                Our proven strategies will help you attract more customers and
                boost your sales.
              </p>
              <div className="flex mt-4">
                <Button className="mr-2" variant="default">
                  Learn More
                </Button>
              </div>
            </div>
            <div>
              <ViewIcon className="h-6 w-6 mb-2" />
              <h2 className="font-semibold mb-2">Enhance Visibility</h2>
              <p className="text-sm">
                We'll optimize your online presence to ensure your business
                stands out from the competition.
              </p>
              <div className="flex mt-4">
                <Button className="mr-2" variant="default">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:hidden justify-center items-center">
          <div className=" w-full h-64 flex justify-center items-center">
            <Image
              alt="Placeholder"
              className="max-h-96 max-w-full"
              height="500"
              src="/growth.png"
              style={{
                aspectRatio: "500/500",
                objectFit: "cover",
              }}
              width="500"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendingUpIcon(props: any) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function UserIcon(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ViewIcon(props: any) {
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
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  );
}
