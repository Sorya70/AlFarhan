"use client";

import { motion } from "framer-motion";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaBriefcase, FaFileUpload } from "react-icons/fa";
import Link from "next/link";

const CareerClient = ({ dict, locale }) => {
  const isArabic = locale === "ar";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const jobOpenings = [
    {
      title: "Graphic Designer",
      description: "Creative graphic designer with experience in Adobe Suite.",
    },
    {
      title: "Sales Executive",
      description: "Candidate must be fluent in English and have field sales experience.",
    },
    {
      title: "Travel Consultant",
      description: "Experience in visa application & travel documentation preferred.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div
        className="relative text-center py-10 uppercase z-19"
        style={{
          backgroundImage: "url('/images/services/DSC09850.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl max-sm:text-3xl font-light tracking-wider text-white">
            {dict.navigation.recruitment}
          </h1>
          <div className="flex items-center justify-center mt-4 max-sm:mt-3 text-xs space-x-1 text-white">
            <Link href="/" className="hover:text-red-800 duration-300">
              {dict.navigation.home}
            </Link>
            {isArabic ? <IoIosArrowBack /> : <IoIosArrowForward />}
            <span>{dict.navigation.recruitment}</span>
          </div>
        </div>
      </div>

      {/* Form + Job Openings */}
      <motion.section
        className="py-10 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Upload Form */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-red-800 mb-3">
                {dict.recruitment.formTitle}
              </h2>
              <div className="w-20 h-1 bg-red-800 mb-6 rounded-2xl"></div>
              <p className="text-gray-600 mb-6">{dict.recruitment.formSubtitle}</p>

              <form
                action="https://formsubmit.co/surjeetkhalasi@gmail.com"
                method="POST"
                encType="multipart/form-data"
                className="space-y-4"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {dict.recruitment.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {dict.recruitment.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-800"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {dict.recruitment.form.mobile}
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      pattern="[0-9]{10}"
                      placeholder="Enter 10-digit mobile number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {dict.recruitment.form.resume}
                  </label>
                  <input
                    type="file"
                    name="attachment"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-red-800 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors shadow-md hover:shadow-lg"
                  >
                    <FaFileUpload className="inline-block mr-2" />
                    {dict.recruitment.form.submit}
                  </button>
                </div>
              </form>
            </div>

            {/* Job Openings */}
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <h2 className="text-3xl font-semibold text-red-800 mb-3">
                {dict.recruitment.openingTitle}
              </h2>
              <div className="w-20 h-1 bg-red-800 mb-6 rounded-2xl"></div>

              <div className="space-y-5">
                {jobOpenings.map((job, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-lg shadow border-l-4 border-red-800"
                  >
                    <h3 className="text-xl font-bold text-red-800 mb-2">
                      <FaBriefcase className="inline-block mr-2" />
                      {job.title}
                    </h3>
                    <p className="text-gray-700 mb-3">{job.description}</p>
                    <button className="text-sm bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-700">
                      {dict.recruitment.applyNow}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CareerClient;
