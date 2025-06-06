import React from "react";
import Icons from "./Icons";

const Footer = () => {
  return (
    <div className="w-full min-h-fit flex flex-col gap-2 bg-greeno">
      <div className="w-full min-h-10  px-10 lg:px-40 pb-4 pt-10 flex flex-col lg:flex-row items-center lg:items-start text-center gap-4 lg:gap-0 lg:justify-between ">
        <div className="flex justify-start items-center">
          <img
            src="/noevi.png"
            alt="noevi logo"
            className="-mt-4"
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col text-white z-[2500]">
          <h2 className="text-2xl font-bold">Contact</h2>
          <ul>
            <li>+421 940 634 115</li>
            <li>info@noevi.com</li>
          </ul>
        </div>
        <div className="flex flex-col text-white z-[2500]">
          <h2 className="text-2xl font-bold">Menu</h2>
          <ul>
            <li>About us</li>
            <li>Your account</li>
            <li>Why to choose Noevi</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="flex flex-col text-white z-[2500]">
          <h2 className="text-2xl font-bold">Media</h2>
          <Icons />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row py-4 lg:py-0 justify-between relative min-h-16 gap-4 items-center px-10 lg:px-40 w-full z-[2500]">
        <div className="absolute w-[80%] h-[1px] bg-white top-0 mx-auto"></div>
        <h2 className="text-white">©2025 Noevi. All rights reserved</h2>
        <ul className="flex gap-4 text-white">
          <li>Terms</li>
          <li> Privacy</li>
          <li>Cookies</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
