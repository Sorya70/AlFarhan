"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const RecruitmentClient = ({ dict, locale }) => {
  const isArabic = locale === "ar";
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const galleryImages = [
      { id: 1, src: "/images/services/RecruitmentProcess.png", alt: "Gallery Image 1" }
    ];

    // Shuffle the images for random display
    const shuffledImages = [...galleryImages].sort(() => Math.random() - 0.5);
    setImages(shuffledImages);
    setLoading(false);
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }

    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div
        className="relative text-center py-10 uppercase"
        style={{
          backgroundImage: "url('/images/services/DSC09889.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl max-sm:text-3xl font-light tracking-wider text-white">
            {dict.navigation.gallery}
          </h1>
          <div className="flex items-center justify-center mt-4 max-sm:mt-3 text-xs space-x-1 text-white">
            <Link href="/" className="hover:text-red-800 duration-300">
              {dict.navigation.home}
            </Link>
            {isArabic ? <IoIosArrowBack /> : <IoIosArrowForward />}
            <Link
              href="/ourgroup"
              className="text-white hover:text-red-800 duration-300"
            >
              {dict.navigation.gallery}
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-br from-white via-[#f5f7fa] to-white">
        <div className="container mx-auto px-5">
          <h2 className="text-lg md:text-base font-extrabold text-red-800 mb-12 text-center drop-shadow-lg">
            {dict.recruitmentPage.subtitle}
          </h2>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-800"></div>
            </div>
          ) : (
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg w-full max-w-5xl aspect-video sm:aspect-[3/2] md:aspect-[4/3] lg:aspect-[16/9]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-contain"
                  priority
                  onError={(e) => {
                    console.log(`Error loading image: ${images[0].src}`);
                    e.target.src = "/images/hero/hero-1.png"; // fallback image
                  }}
                />
              </motion.div>
            </motion.div>

          )}
        </div>
      </section>

    </div>
  );
};

export default RecruitmentClient;
