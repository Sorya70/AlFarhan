"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const GalleryClient = ({ dict, locale }) => {
  const isArabic = locale === "ar";
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const galleryImages = [
      { id: 1, src: "/images/gallery/1.jpg", alt: "Gallery Image 1" },
      { id: 2, src: "/images/gallery/2.jpg", alt: "Gallery Image 2" },
      { id: 3, src: "/images/gallery/3.jpg", alt: "Gallery Image 3" },
      { id: 4, src: "/images/gallery/4.jpg", alt: "Gallery Image 4" },
      { id: 5, src: "/images/gallery/5.png", alt: "Gallery Image 5" },
      { id: 6, src: "/images/gallery/6.jpg", alt: "Gallery Image 6" },
      { id: 7, src: "/images/gallery/7.jpg", alt: "Gallery Image 7" },
      { id: 8, src: "/images/gallery/8.jpg", alt: "Gallery Image 8" },
      { id: 9, src: "/images/gallery/9.jpg", alt: "Gallery Image 9" },
      { id: 10, src: "/images/gallery/10.jpg", alt: "Gallery Image 10" },
      { id: 11, src: "/images/gallery/11.jpg", alt: "Gallery Image 11" },
      { id: 12, src: "/images/gallery/12.jpg", alt: "Gallery Image 12" },
      { id: 13, src: "/images/gallery/13.jpg", alt: "Gallery Image 13" },
      { id: 14, src: "/images/gallery/14.jpg", alt: "Gallery Image 14" },
      { id: 15, src: "/images/gallery/15.jpg", alt: "Gallery Image 15" },
      { id: 16, src: "/images/gallery/16.jpg", alt: "Gallery Image 16" },
      { id: 17, src: "/images/gallery/17.jpg", alt: "Gallery Image 17" },
      { id: 18, src: "/images/gallery/18.jpg", alt: "Gallery Image 18" },
      { id: 19, src: "/images/gallery/19.jpg", alt: "Gallery Image 19" },
      { id: 20, src: "/images/gallery/20.jpg", alt: "Gallery Image 20" },
      { id: 21, src: "/images/gallery/21.jpg", alt: "Gallery Image 21" },
      { id: 22, src: "/images/gallery/22.png", alt: "Gallery Image 22" },
      { id: 23, src: "/images/gallery/23.jpg", alt: "Gallery Image 23" },
      { id: 24, src: "/images/gallery/24.jpg", alt: "Gallery Image 24" },
      { id: 25, src: "/images/gallery/25.jpg", alt: "Gallery Image 25" },
      { id: 26, src: "/images/gallery/26.jpg", alt: "Gallery Image 26" },
      { id: 27, src: "/images/gallery/27.jpg", alt: "Gallery Image 27" },
      { id: 28, src: "/images/gallery/28.jpg", alt: "Gallery Image 28" },
      { id: 29, src: "/images/gallery/29.jpg", alt: "Gallery Image 29" },
      { id: 30, src: "/images/gallery/30.jpg", alt: "Gallery Image 30" },
      { id: 31, src: "/images/gallery/31.jpg", alt: "Gallery Image 31" },
      { id: 32, src: "/images/gallery/32.jpg", alt: "Gallery Image 32" },
      { id: 33, src: "/images/gallery/33.jpg", alt: "Gallery Image 33" },
      { id: 34, src: "/images/gallery/34.jpg", alt: "Gallery Image 34" },
      { id: 35, src: "/images/gallery/35.jpg", alt: "Gallery Image 35" },
      { id: 36, src: "/images/gallery/36.jpg", alt: "Gallery Image 36" },
      { id: 37, src: "/images/gallery/37.jpg", alt: "Gallery Image 37" },
      { id: 38, src: "/images/gallery/38.jpg", alt: "Gallery Image 38" },
      { id: 39, src: "/images/gallery/39.jpg", alt: "Gallery Image 39" },
      { id: 40, src: "/images/gallery/40.jpg", alt: "Gallery Image 40" },
      { id: 41, src: "/images/gallery/41.jpg", alt: "Gallery Image 41" },
      { id: 42, src: "/images/gallery/42.jpg", alt: "Gallery Image 42" },
      { id: 43, src: "/images/gallery/43.jpg", alt: "Gallery Image 43" },
      { id: 44, src: "/images/gallery/44.jpg", alt: "Gallery Image 44" },
      { id: 45, src: "/images/gallery/45.jpg", alt: "Gallery Image 45" },
      { id: 46, src: "/images/gallery/46.jpg", alt: "Gallery Image 46" },
      { id: 47, src: "/images/gallery/47.jpg", alt: "Gallery Image 47" },
      { id: 48, src: "/images/gallery/48.jpg", alt: "Gallery Image 48" },
      { id: 49, src: "/images/gallery/49.jpg", alt: "Gallery Image 49" },
      { id: 50, src: "/images/gallery/50.jpg", alt: "Gallery Image 50" },
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
            {dict.navigation.clients}
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
              {dict.navigation.clients}
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-br from-white via-[#f5f7fa] to-white">
        <div className="container mx-auto px-5">
          <h2 className="text-lg md:text-base font-extrabold text-red-800 mb-12 text-center drop-shadow-lg">
            {dict.galleryPage.subtitle}
          </h2>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-800"></div>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="relative overflow-hidden rounded-lg shadow-lg w-32 h-32 sm:w-40 sm:h-40"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => openLightbox(image)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      priority={index < 8} // Prioritize loading the first 8 images
                      onError={(e) => {
                        console.log(`Error loading image: ${image.src}`);
                        e.target.src = "/images/hero/bannar_1.jpg"; // Fallback image
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="text-white font-medium">{image.alt}</div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-red-800/80 rounded-full p-3 text-white">
                        <FaSearch size={20} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl z-10"
            onClick={closeLightbox}
          >
            ✕
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
          >
            <IoIosArrowBack size={24} />
          </button>

          <motion.div
            className="relative max-w-4xl max-h-[80vh] w-full"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full"
              onError={(e) => {
                e.target.src = "/images/hero/bannar_1.jpg"; // Fallback image
              }}
            />
          </motion.div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
          >
            <IoIosArrowForward size={24} />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default GalleryClient;
