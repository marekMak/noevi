import Link from "next/link";
import Image from "next/image";
import Header from "../components/shared/header";

import Technology from "./components/Technology";

import Banner from "./components/Banner";
import Menu from "../components/shared/header/menu";
import Navigation from "./components/Navigation";
import Logo from "../components/shared/logo";
import Burger from "../components/shared/Burger";

const Hero = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] min-h-screen">
        <div className="bg-greeno hidden lg:flex flex-col justify-between items-center z-50  py-10 relative">
          <Banner />
        </div>
        <div
          className="w-full flex flex-col py-10 px-4 md:px-10 lg:px-20 relative"
          // style={{
          //   backgroundImage: 'url("./back.png")',
          //   backgroundAttachment: "fixed",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/noevi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute block lg:hidden top-10 left-12">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/noeviTextGreen.png"
                alt="Noevi logo"
                height={40}
                width={100}
              />
            </Link>
          </div>

          <Header />

          <div className="w-full h-[80vh] flex flex-col justify-center items-start relative gap-2">
            {/* <img
              src="/noeviText.svg"
              alt="noevi logo"
              className="absolute top-1/2 left-1/2 -translate-1/2"
              width={500}
              height={500}
            /> */}
            <div className="flex flex-col mt-68">
              <h1 className="text-7xl font-bold text-black z-20 ml-4">
                Sustainable
              </h1>
              <h1 className="text-7xl font-bold text-black z-20 ml-4 -mt-4">
                tomorrow
              </h1>
            </div>

            <p className="z-40  text-greeno text-xl ml-4">
              starts today with us
            </p>

            <div className="absolute top-[80%] -translate-y-1/2 w-[96%] h-28 rounded-lg p-4 backdrop-blur-xl bg-white/20">
              <div className="absolute -bottom-4 right-20 w-fit uppercase text-white rounded px-4 py-3 h-fit ml-4 flex justify-center items-center bg-greeno cursor-pointer">
                Read more
              </div>
            </div>
          </div>
        </div>
      </div>
      <Technology />
    </div>
  );
};

export default Hero;
