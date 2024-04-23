"use client";
import { motion } from "framer-motion";
import FloatingPhone from "./FloatingPhone";
import { SmoothScrollLink } from "./SmoothScroll";

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="w-full z-10 min-h-screen px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <span className="text-sm text-slate-400">
          PhoenixRise - From concept to conquest
        </span>
        <h3 className="text-5xl md:text-6xl lg:text-7xl font-semibold mt-2">
          Let's Bring Your ideas to Life
        </h3>
        <p className="text-base md:text-lg text-slate-500 my-4 md:my-6">
          Step into our digital haven, where captivating experiences and
          amplified online presence await. Elevate your brand effortlessly with
          our comprehensive solutions.
        </p>

        <SmoothScrollLink
          href="#getstarted"
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Get Started
        </SmoothScrollLink>
      </motion.div>
      <motion.div variants={itemVariants}>
        <FloatingPhone />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
