import Image from "next/image";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Etgac2tWynV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="flex justify-center py-10" id="innovation">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl items-center">
        <div className="p-10">
          <Image
            alt="Placeholder"
            className="w-full h-auto"
            height={300}
            src="/quality.png"
            width={300}
            priority
          />
        </div>
        <div className="space-y-6 p-10">
          <h2 className="text-3xl font-bold border-l-4 border-[#FF8000] pl-4">
            Innovative Solutions for You
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            elit libero, a pharetra augue.
          </p>
          <h2 className="text-3xl font-bold border-l-4 border-[#FF8000] pl-4">
            Unmatched Quality Assurance
          </h2>
          <p>
            Sed posuere consectetur est at lobortis. Nullam id dolor id nibh
            ultricies vehicula ut id elit.
          </p>
          <h2 className="text-3xl font-bold border-l-4 border-[#FF8000] pl-4">
            Exceptional Customer Support
          </h2>
          <p>
            Donec ullamcorper nulla non metus auctor fringilla. Nullam quis
            risus eget urna mollis ornare vel eu leo.
          </p>
        </div>
      </div>
    </div>
  );
}
