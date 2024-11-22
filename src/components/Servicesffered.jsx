import React from "react";
import { motion } from "framer-motion";
import { Music } from "lucide-react";
import { Clapperboard } from "lucide-react";
import { Image } from "lucide-react";
import { Computer } from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  },
};

const ServiceItem = ({ Icon, title, description }) => (
  <motion.div
    className="flex flex-col items-center text-center"
    variants={itemVariants}
  >
    <Icon className="w-12 h-12 mb-2 text-white" />
    <h3 className="font-bold mb-1 text-lg md:text-xl">{title}</h3>
    <p className="text-sm md:text-base text-white">{description}</p>
  </motion.div>
);

const ServicesOffered = () => {
  return (
    <motion.div
      id="services"
      className="bg-[#007BFF] p-4 py-10 mt-3 sm:p-6 lg:p-8 shadow-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl sm:text-2xl font-bold mb-6 text-black text-center"
        variants={itemVariants}
      >
        Services Offered
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
        variants={containerVariants}
      >
        <ServiceItem
          Icon = {Clapperboard}
          title="Video Editing"
          description="Transforming raw footage into captivating visual stories."
        />
        <ServiceItem
          Icon={Music}
          title="Audio Editing"
          description="Refining sound to deliver clear, professional-quality audio."
        />
       <ServiceItem
          Icon={Image}
          title="Image & Thumbnail"
          description="Creating eye-catching images and thumbnails to enhance your visual appeal."
        />

        <ServiceItem
          Icon={Computer}
          title="Graphic Design"
          description="Crafting stunning visuals that communicate your brand's message effectively."
        />

      </motion.div>
    </motion.div>
  );
};

export default ServicesOffered;