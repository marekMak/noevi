import React from "react";
import Counter from "./Counter";

const Countdown = () => {
  return (
    <div className="w-full min-h-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 bg-[#F5F7F9] px-10 md:px-20 lg:px-40">
      <div className="flex flex-col items-center">
        <h2 className="text-6xl font-bold text-greeno">
          <Counter num={12} />
        </h2>
        <p className="text-xl text-center">Years of Clean Energy</p>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-6xl font-bold text-greeno flex">
          <Counter num={300} />
          <span className="text-purple">+</span>
        </h2>
        <p className="text-xl text-center">Wind Turbines Installed</p>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-6xl font-bold text-greeno flex">
          <Counter num={500} />M<span className="text-purple">+</span>
        </h2>
        <p className="text-xl text-center">kWh Produced Annually</p>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-6xl font-bold text-greeno flex">
          <Counter num={100} />
          <span className="text-purple">%</span>
        </h2>
        <p className="text-xl text-center">Renewable Energy Commitment</p>
      </div>
    </div>
  );
};

export default Countdown;
