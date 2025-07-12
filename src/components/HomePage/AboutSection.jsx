import Image from "next/image";

const AboutSection = ({ dict }) => {
  return (
    <section className="relative">
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-12 py-20 bg-gradient-to-br from-white via-[#f5f7fa] to-white overflow-hidden">
        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col items-start">
          <span className="inline-block mb-5 px-4 py-1 rounded-full bg-sky-100 text-sky-700 font-semibold  shadow">
            {dict.aboutSection.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-lg leading-tight">
            {dict.aboutSection.title}{" "}
            <span className="text-red-800">{dict.aboutSection.highlight}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl leading-relaxed">
            {dict.aboutSection.description}
          </p>
          <ul className="mb-8 space-y-2 text-gray-600 text-base md:text-lg">
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-sky-500 rounded-full"></span>
              {dict.aboutSection.features[0]}
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-pink-400 rounded-full"></span>
              {dict.aboutSection.features[1]}
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
              {dict.aboutSection.features[2]}
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-violet-400 rounded-full"></span>
              {dict.aboutSection.features[3]}
            </li>
          </ul>
        </div>
        <div className="relative z-10 flex-1 grid grid-cols-2 grid-rows-2 gap-4 justify-center items-center">
          {/* Image 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <Image
                src="/images/about/mea.jpg"
                alt="MEA Registration"
                width={200}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">Licensed by Ministry of External Affairs (MEA)</p>
          </div>

          {/* Image 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <Image
                src="/images/about/ISO-2015-Certified.png"
                alt="ISO 2015 Certified"
                width={200}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">ISO 9001:2015 Ceritified</p>
          </div>

          {/* Image 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <Image
                src="/images/about/10-years.png"
                alt="10+ Years of Excellence"
                width={200}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">10+ Years of Excellence</p>
          </div>

          {/* Image 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <Image
                src="/images/alfarhanbody.png"
                alt="Company Profile"
                width={200}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">Company Profile</p>
          </div>
        </div>      
        </div>
    </section>
  );
};

export default AboutSection;
