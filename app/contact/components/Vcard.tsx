import React from "react";

const Vcard = () => {
  return (
    <div className="w-full py-20 bg-white min-h-20 px-10 lg:px-40">
      <div className="flex flex-col gap-8 lg:flex-row items-center justify-between">
        <div className="flex flex-col gap-2 items-center lg:items-start">
          <div className="flex gap-2 items-center">
            <img src="/headset.svg" className="w-8 h-8" />
            <a href="tel:+421940634115">+421 940 634 115</a>
          </div>
          <p className="max-w-80 font-light text-center lg:text-left">
            Call us and get a quick solution from us. Additional charges may
            apply
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center lg:items-start">
          <div className="flex gap-2 items-center">
            <img src="/envelope.svg" className="w-8 h-8" />
            <a href="tel:+421940634115">info@noevi.com</a>
          </div>
          <p className="max-w-80 font-light text-center lg:text-left">
            For general queries and questions including partnership
            opportunities
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center lg:items-start">
          <div className="flex gap-2 items-center">
            <img src="/pin.svg" className="w-8 h-8" />
            <span>Office address</span>
          </div>
          <p className="max-w-80 font-light text-center lg:text-left">
            Landstraße 184A, Hainburg an der Donau, 2410, Austria
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vcard;
