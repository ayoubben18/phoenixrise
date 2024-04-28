"use client";
import { motion } from "framer-motion";
import { SmoothScrollLink } from "./SmoothScroll";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger the animations of child components
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  return (
    <div className="w-full py-12 lg:py-16">
      <motion.div
        className="container grid max-w-3xl items-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-5xl xl:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={textVariants} className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Services
          </h2>
        </motion.div>
        <motion.div
          variants={textVariants}
          className="grid gap-4 md:gap-2 lg:justify-self-end"
        >
          <SmoothScrollLink
            className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white shadow-sm text-sm font-medium px-4 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            href="#getstarted"
          >
            Get started
          </SmoothScrollLink>
        </motion.div>
      </motion.div>
      <motion.div
        className="container grid max-w-5xl items-start gap-6 px-4 py-8 md:py-12 lg:py-16 md:gap-8 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            title: "Website Creation",
            description:
              "Crafting custom websites that combine functionality and aesthetics for a seamless user experience across all devices.",
          },
          {
            title: "Logo Design",
            description:
              "Creating unique logos that capture the essence of the brand and leave a lasting impression on the audience.",
          },
          {
            title: "Instagram Content Design",
            description:
              "Creating captivating visuals and engaging content specifically tailored for Instagram to enhance the brand's presence.",
          },
          {
            title: "Ecommerce Stores",
            description:
              "Building intuitive online stores that drive sales and provide a seamless shopping experience for customers.",
          },
          {
            title: "Video Editing",
            description:
              "Offering professional video editing services to create compelling visual narratives that resonate with the audience.",
          },
          {
            title: "Graphic Motion",
            description:
              "Bringing ideas to life through captivating motion graphics that enhance brand storytelling.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            variants={textVariants}
            className="flex flex-col gap-2.5"
          >
            <h3 className="text-2xl font-bold">{service.title}</h3>
            <p className="text-gray-500">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
