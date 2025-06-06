"use client";
import { useEffect, useRef, useState } from "react";

type BurgerProps = {
  handleOpen: (arg: boolean) => void;
};

const Burger = ({ handleOpen }: BurgerProps) => {
  const [open, setOpen] = useState(false);
  const bar1 = useRef<HTMLDivElement>(null);
  const bar2 = useRef<HTMLDivElement>(null);
  const bar3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      if (!bar1.current || !bar2.current || !bar3.current) return;
      bar1.current.style.transform = "rotate(45deg) translateY(10px)";
      bar2.current.style.opacity = "0";
      bar3.current.style.transform = "rotate(-45deg) translateY(-10px)";
    } else {
      if (!bar1.current || !bar2.current || !bar3.current) return;
      bar1.current.style.transform = "rotate(0)";
      bar2.current.style.opacity = "1";
      bar3.current.style.transform = "rotate(0)";
    }
  }, [open]);

  return (
    <button
      onClick={() => {
        setOpen((prev) => {
          const newState = !prev;
          handleOpen(newState);
          return newState;
        });
      }}
      className="flex flex-col gap-1 cursor-pointer z-50 absolute lg:hidden top-9 right-10"
    >
      <div
        ref={bar1}
        className="h-1 w-10 bg-greeno relative transition-all delay-150"
        style={{
          backgroundColor: open ? "white" : "#6cbe45",
        }}
      />
      <div
        ref={bar2}
        className="h-1 w-10 bg-greeno relative transition-all delay-150"
      />
      <div
        ref={bar3}
        className="h-1 w-10 bg-greeno relative transition-all delay-150"
        style={{
          backgroundColor: open ? "white" : "#6cbe45",
        }}
      />
    </button>
  );
};

export default Burger;
