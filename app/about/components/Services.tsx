import React from "react";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Wind Energy Production",
      description:
        "Generating clean energy from wind turbines located across Lower Austria to power thousands of homes sustainably.",
    },
    {
      number: "02",
      title: "Smart Grid Solutions",
      description:
        "Implementing intelligent energy management systems that balance supply and demand efficiently.",
    },
    {
      number: "03",
      title: "Energy Consulting",
      description:
        "Helping households and businesses reduce their carbon footprint through tailored energy strategies.",
    },
    {
      number: "04",
      title: "Educational Programs",
      description:
        "Collaborating with schools and communities to raise awareness about renewable energy and sustainability.",
    },
    {
      number: "05",
      title: "Green Infrastructure",
      description:
        "Developing eco-friendly infrastructure including EV charging points and solar-powered facilities.",
    },
  ];

  return (
    <section
      className="w-full pb-20 px-10 md:px-40 text-white py-20 bg-cover bg-center bg-[#00aa55] 
             bg-scroll lg:bg-fixed"
      style={{
        backgroundImage: 'url("/cloud.jpg")',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center md:text-left text-greeno">
          We provide innovative green energy services
        </h2>
        <p className="text-lg mb-12 text-center md:text-left text-black">
          For a more sustainable tomorrow. See how we empower people and nature.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.number} className="group bg-white p-4">
              <div className="text-3xl font-semibold text-greeno mb-2 group-hover:text-green-700 ">
                {service.number}
              </div>
              <h3 className="text-xl font-bold mb-2 text-greeno group-hover:text-green-700 transition">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href="#"
                className="text-green-600 font-medium inline-flex items-center gap-1 hover:underline group-hover:text-green-700 "
              >
                View more ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
