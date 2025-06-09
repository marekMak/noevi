"use client";

import Link from "next/link";
import Burger from "../Burger";
import Mobile from "../Mobile";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (arg: boolean) => setOpen(arg);
  return (
    <div className="w-full min-h-20 flex justify-between md:justify-end items-start py-0 md:py-8  px-10 md:px-40 absolute top-0 right-0 overflow-x-clip">
      <ul className="hidden lg:flex space-x-6 font-semibold text-greeno  z-[2000]">
        {/* <Link
          href="/account"
          className="hover:text-black hover:font-semibold delay-150 transition-all cursor-pointer"
        >
          Account
        </Link> */}
        <Link
          href="/about"
          className="whitespace-nowrap hover:text-black hover:font-semibold delay-150 transition-all cursor-pointer"
        >
          About us
        </Link>
        <Link
          href="/technologies"
          className="whitespace-nowrap hover:text-black hover:font-semibold delay-150 transition-all cursor-pointer"
        >
          Technologies
        </Link>
        <Link
          href="/calculation"
          className="hover:text-black hover:font-semibold delay-150 transition-all cursor-pointer"
        >
          Calculation
        </Link>
        <Link
          href="/contact"
          className="hover:text-black hover:font-semibold delay-150 transition-all cursor-pointer"
        >
          Contact
        </Link>
      </ul>
      <Burger handleOpen={handleOpen} />
      <Mobile open={open} />
    </div>
  );
};

export default Header;
