import Nav from "../components/shared/nav";
import Contact from "./components/Contact";
import Vcard from "./components/Vcard";

const page = () => {
  return (
    <div className="bg-greeno w-full min-h-screen flex flex-col">
      <Nav />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#EEEAE3] h-[60vh] lg:h-full relative py-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-contain z-0"
          >
            <source src="/noevi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="py-10">
          <Contact />
        </div>
      </div>
      <Vcard />
    </div>
  );
};

export default page;
