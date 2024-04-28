/**
 * v0 by Vercel.
 * @see https://v0.dev/t/u9xMxPQA8pM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className=" py-16 text-center" id="services">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Unlock Your Business Potential with BoostMedia
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            BoostMedia offers a range of additional features and services to
            help your business thrive. From social media management to website
            design, we have you covered.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button variant="default">
              <Link href="#innovation">Learn More</Link>
            </Button>
            <Button variant="secondary">
              <Link href="#form">Sign Up</Link>
            </Button>
          </div>
        </section>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <LineChartIcon className="mx-auto h-10 w-10 text-gray-900" />
            <h3 className="mt-6 text-lg font-medium leading-6 text-gray-900">
              Social Media Management
            </h3>
            <p className="mt-4 text-base text-gray-500">
              Our team of experts will handle your social media presence,
              engaging with your audience and driving growth.
            </p>
          </div>
          <div>
            <PieChartIcon className="mx-auto h-10 w-10 text-gray-900" />
            <h3 className="mt-6 text-lg font-medium leading-6 text-gray-900">
              Website Design
            </h3>
            <p className="mt-4 text-base text-gray-500">
              We create stunning websites that are optimized for user experience
              and conversion.
            </p>
          </div>
          <div>
            <TextIcon className="mx-auto h-10 w-10 text-gray-900" />
            <h3 className="mt-6 text-lg font-medium leading-6 text-gray-900">
              Content Creation
            </h3>
            <p className="mt-4 text-base text-gray-500">
              Our talented team will produce high-quality content that resonates
              with your target audience.
            </p>
          </div>
          <div>
            <AlignCenterHorizontalIcon className="mx-auto h-10 w-10 text-gray-900" />
            <h3 className="mt-6 text-lg font-medium leading-6 text-gray-900">
              SEO Optimization
            </h3>
            <p className="mt-4 text-base text-gray-500">
              We'll help your website rank higher in search engine results,
              driving organic traffic to your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AlignCenterHorizontalIcon(props: any) {
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
      <path d="M2 12h20" />
      <path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
      <path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
      <path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" />
      <path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function LineChartIcon(props: any) {
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
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function PieChartIcon(props: any) {
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
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function TextIcon(props: any) {
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
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  );
}
