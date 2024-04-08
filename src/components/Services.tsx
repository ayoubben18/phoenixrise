/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qU5Zbz6MJ2T
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { SmoothScrollLink } from "./SmoothScroll";

export default function Services() {
  return (
    <div className="w-full py-12 lg:py-16">
      <div className="container grid max-w-3xl items-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-5xl xl:gap-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Services
          </h2>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We offer a variety of services to meet your needs.
          </p>
        </div>
        <div className="grid gap-4 md:gap-2 lg:justify-self-end">
          <SmoothScrollLink
            className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white shadow-sm text-sm font-medium px-4 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            href="#getstarted"
          >
            Get started
          </SmoothScrollLink>
        </div>
      </div>
      <div className="container grid max-w-5xl items-start gap-6 px-4 py-8 md:py-12 lg:py-16 md:gap-8 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:max-w-6xl">
        <div className="flex flex-col gap-2.5">
          <h3 className="text-2xl font-bold">Website Creation</h3>
          <p className="text-gray-500">
            Crafting custom websites that combine functionality and aesthetics
            for a seamless user experience across all devices.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-2xl font-bold">Logo Design</h3>
          <p className="text-gray-500">
            Creating unique logos that capture the essence of the brand and
            leave a lasting impression on the audience.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-2xl font-bold">Instagram Content Design</h3>
          <p className="text-gray-500">
            Creating captivating visuals and engaging content specifically
            tailored for Instagram to enhance the brand's presence.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-2xl font-bold">Ecommerce Stores</h3>
          <p className="text-gray-500">
            Building intuitive online stores that drive sales and provide a
            seamless shopping experience for customers.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-2xl font-bold">Video Editing</h3>
          <p className="text-gray-500">
            Offering professional video editing services to create compelling
            visual narratives that resonate with the audience.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-2xl font-bold">Graphic Motion</h3>
          <p className="text-gray-500">
            Bringing ideas to life through captivating motion graphics that
            enhance brand storytelling.
          </p>
        </div>
      </div>
    </div>
  );
}
