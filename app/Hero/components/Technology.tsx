import Link from "next/link";

const Technology = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div
        className="w-full order-2 lg:order-1 h-screen flex flex-col py-10 px-4 md:px-10 lg:px-20 relative"
        // style={{
        //   backgroundImage: 'url("./technology.png")',
        //   backgroundAttachment: "fixed",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "contain",
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
          <source src="/propeller_.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full order-1 lg:order-2 min-h-screen bg-greeno flex px-10 py-10 flex-col items-center justify-center gap-4">
        <img
          src="/noeviTextWhite.png"
          alt="noevi logo"
          className=""
          width={500}
          height={500}
        />
        <h2 className="text-2xl text-center md:text-left md:text-4xl font-bold text-white">
          The best technology at your fingertips
        </h2>
        <i className="text-white font-4xl  text-center md:text-left">
          Noevi is the best you can get when it comes to sustainable wind-based
          solutions.
        </i>
        <Link
          href="/technologies"
          className="border-[1px] border-white text-white delay-150 transition-colors hover:bg-purple hover:border-purple  text-uppercase  text-2xl px-4 py-2 rounded cursor-pointer"
        >
          Find your solution
        </Link>
      </div>
    </div>
  );
};

export default Technology;
