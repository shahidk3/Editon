import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const CompanyPolicy = () => {
  return (
    <div className="max-w-full bg-white p-10 sm:p-6 lg:p-8 lg:mx-8">
      <div className="mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-brown-800 inter-bold text-left">
          Company Policy
        </h1>

        <div className="space-y-16 overflow-hidden">
          {/* Vision Section */}
          <motion.div
            className="flex flex-col lg:flex-row items-center lg:items-start gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInLeft}
          >
            <img
              src="/Vision-png.png"
              alt="Biryani dish"
              className="w-64 h-64 rounded-full object-contain"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-semibold mb-4 text-brown-700 inter-semibold">
                Vision
              </h2>
              <p className="lg:text-3xl sm:text-xl md:text-2xl text-gray-700 leading-relaxed inter-regular">
                "Our vision is to elevate brands through innovative video editing and graphic design, transforming ideas into compelling visual stories that resonate with audiences. We aim to be a trusted partner in creativity, delivering exceptional quality and fostering collaboration."
              </p>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInRight}
          >
            <img
              src="Mission-png.png"
              alt="South Indian Thali"
              className="w-64 h-64 object-contain"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-semibold mb-4 text-brown-700 inter-semibold">
                Mission
              </h2>
              <p className="lg:text-3xl sm:text-xl md:text-2xl text-gray-700 leading-relaxed inter-regular">
                "Our mission is to provide exceptional video editing and graphic design services that empower clients to tell their stories visually. We are dedicated to understanding our clients' needs, delivering high-quality results on time, and fostering creative collaboration to bring their visions to life."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPolicy;
