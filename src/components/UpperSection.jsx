import React from "react";
import { motion } from "framer-motion";
import img from "../image/amardip.png";

function UpperSection() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  const imgVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5, duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.img
          src={img}
          alt="amardip image"
          className="max-w-sm rounded-lg shadow-2xl"
          variants={imgVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.div
          className="text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-5xl font-bold">Amardip Padghan</h1>
          <h2 className="text-xl mb-4">
            MERN Stack Developer || React Native Developer
          </h2>
          <p className="py-6">
            Amardip is a Full Stack Developer with a passion for creating
            beautiful and functional websites.
          </p>
          <div className="space-y-4 space-x-3">
            <motion.button
              className="btn btn-primary"
              variants={buttonVariants}
              whileHover="hover"
            >
              Contact Me
            </motion.button>
            <motion.button
              className="btn btn-primary"
              variants={buttonVariants}
              whileHover="hover"
            >
              Download CV
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default UpperSection;
