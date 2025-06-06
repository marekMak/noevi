import Nav from "../components/shared/nav";

const page = () => {
  return (
    <div className="bg-greeno w-full min-h-screen flex flex-col justify-center">
      <Nav />

      <div className="bg-white py-20 w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 pb-10 px-10 md:px-20 lg:px-34"></div>
    </div>
  );
};

export default page;
