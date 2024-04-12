"use client";
import React from "react";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Stagger the animations of child components
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-14 text-center py-20 px-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Animations trigger as the component comes into view
      viewport={{ once: true }} // Ensures animation only plays once
    >
      <motion.div variants={cardVariants}>
        <TeamCard
          image="/ayoub.jpg"
          name="Ayoub Bensalah"
          role="Founder"
          description="Ayoub is a software engineer, a graphic designer, and founder of PhoenixRise. Responsible for project management."
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <TeamCard
          image="/houda.jpg"
          name="Houda Boussaid"
          role="Co-Founder"
          description="Houda is a frontend engineer and co-founder of PhoenixRise. Responsible for communication and sales."
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
