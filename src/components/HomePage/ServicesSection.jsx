const ServicesSection = ({ dict, header }) => {
  const serviceImages = {
    1: "/images/services/1.jpg",
    2: "/images/services/2.jpg",
    3: "/images/services/3.jpg",
    4: "/images/services/4.jpg",
    6: "/images/services/5.jpg",
    7: "/images/services/6.jpg",
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-[#f5f7fa] to-white overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-sky-400 opacity-20 rounded-full filter blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-400 opacity-20 rounded-full filter blur-3xl z-0" />

      {/* Logo background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img
          src="/images/alfarhanwhite.png"
          alt="Al Farhan Logo Background"
          className="w-[50vw] max-w-4xl opacity-30 select-none"
          draggable={false}
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-800 mb-12 text-center drop-shadow-lg">
          {header || ""}
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {dict.services.map((service) => (
            <div
              key={service.id}
              className="group bg-white/90 rounded-3xl shadow-xl border border-gray-100 p-7 flex flex-col h-full transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 shadow-lg border border-gray-100">
                <img
                  src={serviceImages[service.id]}
                  alt={service.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-800 mb-4 group-hover:text-sky-600 transition-colors duration-300 leading-snug">
                {service.title}
              </h3>

              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-3">
                {service.descOne}
              </p>

              <p className="text-gray-600 text-xs sm:text-sm leading-normal">
                {service.descTwo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
