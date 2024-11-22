import React, { useState } from "react";
import { motion } from "framer-motion";

// Offering data (can be repeated or replaced with more data)
const offeringsData = [
  { type: "Anime Edits", image: "/Anime-edits.jpg" },
  { type: "Vlog Edits", image: "/Vlog-edits.jpg" },
  { type: "Reel Edits", image: "/Reel-edits.jpg" },
  { type: "Photo Edits", image: "/Photo-edits.jpg" },
  { type: "Thumbnail Making", image: "/Thumbnail.jpg" },
  { type: "Short Flim Edits", image: "/Short-flim.jpg" },
  { type: "Audio Edits", image: "/Audio-edits.jpg" },
  { type: "Background Musics", image: "/Bg-music.jpg" },
  { type: "Special Effects", image: "/Effects.jpg" },
  { type: "Couple Edits", image: "/Couple-edit.jpg" },
  { type: "Product Design", image: "/Product-design.jpg" },
  { type: "Promotion Video", image: "/Promo-video.jpg" },
  { type: "Product Videos", image: "/Product-video.jpg" },
  { type: "Etc", image: "/Etc.jpg" },
  { type: "Direct Contact Through Number", image: "/Number.jpg" },
  { type: "Direct Contact Through Email", image: "/Email.jpg" },
];

// Animation Variants for Section and Offering Cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Single Offering Card Component with Hover and Scroll Animations
const OfferingCard = ({ type, image }) => (
  <motion.div
    id="offerings"
    className="relative w-72 h-72 rounded-lg overflow-hidden shadow-md transition-transform duration-300"
    variants={cardVariants}
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
    }}
    whileTap={{ scale: 0.95 }}
  >
    <img src={image} alt={type} className="w-full h-full object-cover" />
    <div className="absolute top-0 left-0 right-0 h-7 bg-brown-800 bg-opacity-80 text-white">
      <span className="font-bold block text-center text-sm sm:text-base bg-[#3A1101] py-2 px-4">
        {type}
      </span>
    </div>
  </motion.div>
);

// Main Offerings Component with Pagination and Scroll Animations
const Offerings = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(offeringsData.length / itemsPerPage);

  const currentOfferings = offeringsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <motion.div
      className="max-w-full bg-white p-4 md:p-6 lg:p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-full mx-auto">
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center mb-6 w-full"
          variants={cardVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-0 px-4 md:px-6 lg:px-8">
            Our Offerings
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center"
          variants={containerVariants}
        >
          {currentOfferings.map((offering, index) => (
            <OfferingCard key={index} {...offering} />
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center items-center mt-6"
          variants={cardVariants}
        >
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`bg-[#3A1101] text-white px-4 py-2 rounded-l ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {"<"}
          </button>
          <span className="px-4 py-2 text-gray-800">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`bg-[#3A1101] text-white px-4 py-2 rounded-r ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {">"}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Offerings;