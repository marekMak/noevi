import Nav from "../components/shared/nav";
import Countdown from "./components/Countdown";
import Services from "./components/Services";
import Story from "./components/Story";
import Team from "./components/Team";

const page = () => {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      <Nav />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-10 md:px-20 lg:px-40 pt-10">
        <Story />
        <div className="w-full h-[60vh] lg:h-fit py-5 px-4 md:px-0 relative hidden lg:block">
          <h2 className="text-6xl font-semibold text-greeno">We power</h2>
          <div className="absolute cursor-pointer top-4 md:top-0 left-4 md:left-10 w-[60vh] h-[60vh] z-10 hover:z-50 duration-300">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-contain z-0"
            >
              <source src="/truck.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-36 left-20 text-white">
              your everyday needs{" "}
            </div>
            <div className="absolute bottom-16 md:bottom-20 -left-4 inline-block w-10 h-10 z-50 border-solid border-t-[136px] border-r-0 border-l-[136px] border-b-0 border-greeno border-r-transparent border-t-transparent border-b-transparent"></div>
          </div>

          <div className="absolute cursor-pointer top-28 md:top-20 left-40 md:left-60 w-[60vh] h-[60vh] z-20 hover:z-60 duration-300">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-contain z-0"
            >
              <source src="/car.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-36 right-20 text-white">
              your family trips
            </div>
            <div className="absolute bottom-16 md:bottom-20 -right-4 inline-block w-10 h-10 border-solid border-t-0 border-r-0 border-l-[136px] border-b-[136px] border-l-transparent border-r-transparent border-t-transparent border-greeno"></div>
          </div>
        </div>
      </div>
      <div className="px-10 md:px-20 w-full h-fit lg:px-40 py-20 flex flex-col items-center justify-center">
        <img
          src="/noeviText.png"
          className="h-40"
          alt="Noevi green text"
        />
        <h2 className="text-2xl font-semibold text-greeno text-center md:text-left">
          isn’t just an energy company — we’re a movement for a cleaner,
          conscious future.
        </h2>
      </div>
      <Services />
      <Countdown />
      <Team />
    </div>
  );
};

export default page;
