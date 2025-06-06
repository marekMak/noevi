"use client";

import Nav from "../components/shared/nav";
import { Canvas } from "@react-three/fiber";
import { View, Loader } from "@react-three/drei";
import clsx from "clsx";
import TechnologyScene from "./components/TechnologyScene";
import { Suspense } from "react";

const Page = () => {
  const texts = [
    {
      title: "Noevi One – Wind Technology of the Future",
      desc: "Noevi One is engineered for efficient power generation even in low to medium wind conditions. Its three-blade rotor, made from carbon composites, spans 18 meters and starts producing energy at just 2.5 m/s. An intelligent yaw drive system ensures optimal orientation toward the wind throughout the day. With a capacity of up to 55 kW, it's ideal for small industrial sites or communities. Designed and built in Hainburg with a focus on sustainability and local sourcing.",
    },
    {
      title: "Clean Energy for Everyday Life",
      desc: "We believe clean energy should be the standard, not the exception. Our turbines transform wind into electricity without emissions, noise, or landscape disruption. Thanks to their compact design, Noevi turbines fit seamlessly into sensitive environments while helping reduce the carbon footprint of homes and businesses.",
    },
    {
      title: "Energy Independence Starts with Wind",
      desc: "With Noevi One, you can generate your own power and reduce dependence on major utility providers. It’s a stable, reliable energy source that protects you from price fluctuations and grid outages. The wind is always there – harness it to power your future.",
    },
    {
      title: "Designed in Hainburg, Powered by Nature",
      desc: "We are an Austrian company rooted in Hainburg, committed to making wind energy more accessible. Every Noevi turbine is crafted using local materials and partnerships, combining European precision with a long-term vision. For us, sustainability isn’t a trend – it’s our responsibility.",
    },
  ];

  return (
    <div className="bg-greeno w-full min-h-screen flex flex-col justify-center relative">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{ fov: 50 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 100,
        }}
      >
        <Suspense fallback={null}>
          <TechnologyScene />
        </Suspense>
      </Canvas>

      <Loader />

      <Nav />

      <div className="bg-greeno py-20 w-full min-h-screen pb-10 px-10 lg:px-34">
        <div>
          <div className="relative z-[100] grid w-full lg:w-[80%] mx-auto">
            {texts.map((text, index) => (
              <div
                key={index}
                className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
              >
                <div
                  className={clsx(
                    index % 2 === 0 ? "col-start-1" : "md:col-start-2",
                    "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30"
                  )}
                >
                  <h2 className="text-balance text-5xl font-bold">
                    {text.title}
                  </h2>
                  <div className="mt-4 text-xl  text-justify text-white">
                    {text.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
