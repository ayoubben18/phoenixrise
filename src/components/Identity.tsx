"use client";
import { delay, motion } from "framer-motion";
import { ChevronRight, PenTool, WalletCards } from "lucide-react";
import React from "react";

const Identity = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1, // Increased stagger duration for a slower effect
        duration: 0.5,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, x: -30, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { type: "spring", stiffness: 120, duration: 0.8 }, // Slower transition for smoother animation
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }, // Matching the slower transition speed
    },
  };

  return (
    <motion.div
      className="min-h-[70vh] flex flex-col gap-10 justify-center text-slate-900 py-20 px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        variants={containerVariants}
        className="flex flex-col items-start justify-start gap-3"
      >
        <h1 className="text-6xl font-bold">What we do.</h1>
        <p className="text-lg">In PhoenixRise, We Digitalize Ideas via: </p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        className="flex flex-wrap items-start gap-10 w-full text-start"
      >
        <div className="flex flex-col items-start gap-3 max-w-[300px]">
          <motion.div variants={iconVariants}>
            <PenTool size={50} className="text-slate-500" />
          </motion.div>
          <motion.div variants={textVariants}>
            <p className="text-2xl font-bold">Design</p>
            <p className="text-lg">We design social media content and videos</p>
          </motion.div>
        </div>
        <div className="flex flex-col items-start gap-3 max-w-[300px]">
          <motion.div variants={iconVariants}>
            <ChevronRight size={50} className="text-slate-500" />
          </motion.div>
          <motion.div variants={textVariants}>
            <p className="text-2xl font-bold">Websites</p>
            <p className="text-lg">We build websites and e-commerce stores</p>
          </motion.div>
        </div>
        <div className="flex flex-col items-start gap-3 max-w-[300px]">
          <motion.div variants={iconVariants}>
            <WalletCards size={50} className="text-slate-500" />
          </motion.div>
          <motion.div variants={textVariants}>
            <p className="text-2xl font-bold">Consulting</p>
            <p className="text-lg">
              We offer consulting services in the digital realm
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Identity;
