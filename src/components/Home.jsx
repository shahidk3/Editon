import React from "react";
import { motion } from "framer-motion";
import Navbar2 from "./Navbar2";

const Home = () => {
  return (
    <>
      <Navbar2 />
      <div
        id="home"
        className="flex flex-col md:flex-row md:justify-between justify-center items-center h-screen -mt-24 overflow-hidden"
      >
        {/* Text Animation */}
        <motion.div
          className="text-center md:text-left mb-4 md:mt-16 lg:mt-20 p-10 md:p-10 md:text-6xl md:py-10 inter-bold leading-relaxed flex flex-col md:gap-7"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="block text-3xl md:text-4xl lg:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            TRANSFORMING
          </motion.span>
          <motion.span
  className="block text-3xl md:text-4xl lg:text-6xl text-[#007BFF]"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4, duration: 1 }}
>
  Ideas into <br /> Stunning Visuals
</motion.span>


          <motion.span
            className="text-xl md:text-2xl lg:text-3xl text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Your Vision, Our Creation
          </motion.span>


        </motion.div>

        {/* Image Animation */}
        <img
  className="absolute bottom-0 right-0 transform translate-x-[10%] md:top-1/2 md:right-1/4 lg:right-0 lg:top-1/2 lg:translate-x-[15%] lg:-translate-y-1/2 z-[-1] object-cover scale-[0.5] md:scale-[0.6] lg:scale-[0.4] animate-fadeSlideIn"
  src="/home-logo.jpg"
  alt="Pradhnya Foods"
/>




      </div>
    </>
  );
};

export default Home;
