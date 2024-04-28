/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AsZjQE097p2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Component() {
  return (
    <div className="max-w-6xl mx-auto my-8 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6 text-center md:text-start">
          <h1 className="text-5xl font-bold leading-tight">
            Boost Your Business with BoostMedia's Expertise
          </h1>
          <p className="text-lg">
            We specialize in helping businesses grow through strategic digital
            marketing solutions. Our team of experts will create tailored
            strategies to boost your online presence and drive results.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <Button>Learn More</Button>
            <Button variant="outline">Sign Up</Button>
          </div>
        </div>
        <div className="flex justify-center items-center rounded-lg">
          <Image
            alt="Placeholder"
            className="max-h-96 max-w-full"
            height="300"
            src="/bloggin.png"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
            priority
          />
        </div>
      </div>
    </div>
  );
}
