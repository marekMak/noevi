import React from "react";
import Link from "next/link";

type MobileProps = {
  open: boolean;
};

const Mobile = ({ open }: MobileProps) => {
  return (
    <div
      className={`h-screen w-80 bg-greeno z-[1900] shadow-2xl absolute top-0 right-0  transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="flex flex-col ml-10 mt-20 space-y-4 font-semibold text-white">
        <ul className="hover:text-purple hover:font-semibold delay-150 transition-all cursor-pointer">
          Account
        </ul>
        <Link
          href="/about"
          className="whitespace-nowrap hover:text-purple hover:font-semibold delay-150 transition-all cursor-pointer"
        >
          About us
        </Link>
        <Link
          href="/technologies"
          className="whitespace-nowrap hover:text-purple hover:font-semibold delay-150 transition-all cursor-pointer"
        >
          Technologies
        </Link>
        <Link
          href="/calculation"
          className="hover:text-purple hover:font-semibold delay-150 transition-all cursor-pointer"
        >
          Calculation
        </Link>
        <Link
          href="/contact"
          className="hover:text-purple hover:font-semibold delay-150 transition-all cursor-pointer"
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Mobile;
