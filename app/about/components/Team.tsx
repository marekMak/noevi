import Image from "next/image";

const Team = () => {
  return (
    <div className="w-full min-h-40 py-10 px-10 lg:px-40">
      <h2 className="text-6xl font-semibold text-greeno text-center lg:text-left">
        Founders
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center lg:justify-center py-10">
        <div className="card bg-base-100 w-96 shadow-sm group relative overflow-hidden cursor-pointer">
          <figure className="relative">
            <img
              src="/volkart.png"
              alt="Volkhart Gumprecht"
              className="h-96 w-full object-cover transition duration-300"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300">
              <a
                href="tel:+421940634115"
                className="absolute opacity-0 -bottom-20 group-hover:opacity-100 group-hover:bottom-12 text-white left-4 duration-700 flex gap-2 hover:text-greeno"
              >
                <Image
                  src="/phone.svg"
                  className=""
                  alt="phone icon"
                  width={20}
                  height={20}
                />{" "}
                +421 940 634 115
              </a>

              <a
                href="mailto:info@noevi.au"
                className="absolute opacity-0 -bottom-20 group-hover:opacity-100 group-hover:bottom-6 text-white left-4 duration-700 flex gap-2 hover:text-greeno"
              >
                <Image
                  src="/envelope.svg"
                  className=""
                  alt="phone icon"
                  width={20}
                  height={20}
                />{" "}
                info@noevi.au
              </a>
            </div>
          </figure>
          <div className="card-body flex flex-col gap-2 items-center p-4">
            <h2 className="card-title text-xl font-bold">Volkhart Gumprecht</h2>
            <h2 className="card-title text-xl font-bold text-greeno">
              Founder
            </h2>
            <p className="text-justify text-xl">
              A visionary leader with decades of experience, shaping the
              company’s mission and long-term values.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm group relative overflow-hidden cursor-pointer">
          <figure className="relative">
            <img
              src="/mario.png"
              alt="Mario Gangl"
              className="h-96 w-full object-cover transition duration-300"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300">
              <a
                href="tel:+421940634115"
                className="absolute opacity-0 -bottom-20 group-hover:opacity-100 group-hover:bottom-12 text-white left-4 duration-700 flex gap-2 hover:text-greeno"
              >
                <Image
                  src="/phone.svg"
                  className=""
                  alt="phone icon"
                  width={20}
                  height={20}
                />{" "}
                +421 940 634 115
              </a>

              <a
                href="mailto:info@noevi.au"
                className="absolute opacity-0 -bottom-20 group-hover:opacity-100 group-hover:bottom-6 text-white left-4 duration-700 flex gap-2 hover:text-greeno"
              >
                <Image
                  src="/envelope.svg"
                  className=""
                  alt="phone icon"
                  width={20}
                  height={20}
                />{" "}
                info@noevi.au
              </a>
            </div>
          </figure>
          <div className="card-body flex flex-col gap-2 items-center p-4">
            <h2 className="card-title text-xl font-bold">Mario Gangl</h2>
            <h2 className="card-title text-xl font-bold text-greeno">
              Founder
            </h2>
            <p className="text-justify text-xl">
              A strategic mind driving innovation and sustainable growth with a
              strong focus on quality.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-6xl font-semibold text-black text-center lg:text-left">
        Meet our team
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-center lg:items-stretch justify-between py-10">
        <div className="card bg-base-100 w-96 shadow-sm group relative overflow-hidden cursor-pointer">
          <figure className="relative">
            <img
              src="/2.jpg"
              alt="Angelika Mauer"
              className="h-96 w-full object-cover transition duration-300"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300">
              <a
                href="tel:+421940634115"
                className="absolute opacity-0 -bottom-20 group-hover:opacity-100 group-hover:bottom-12 text-white left-4 duration-700 flex gap-2 hover:text-greeno"
              >
                <Image
                  src="/phone.svg"
                  className=""
                  alt="phone icon"
                  width={20}
                  height={20}
                />{" "}
                +421 940 634 115
              </a>

              <a
                href="mailto:info@noevi.au"
                className="absolute opacity-0 -bottom-20 group-hover:opacity-100 group-hover:bottom-6 text-white left-4 duration-700 flex gap-2 hover:text-greeno"
              >
                <Image
                  src="/envelope.svg"
                  className=""
                  alt="phone icon"
                  width={20}
                  height={20}
                />{" "}
                info@noevi.au
              </a>
            </div>
          </figure>
          <div className="card-body flex flex-col gap-2 items-center p-4">
            <h2 className="card-title text-xl font-bold">Angelika Mauer</h2>
            <h2 className="card-title text-xl font-bold text-greeno">
              Head of HR department
            </h2>
            <p className="text-justify">
              With a sharp eye for talent and a passion for people, Angelika
              shapes a strong, values-driven culture across the company.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm group relative overflow-hidden cursor-pointer">
          <figure className="relative">
            <img
              src="/anna.jpg"
              alt="Anna Rosenthal"
              className="h-96 w-full object-cover transition duration-300"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300">
              <a
                href="tel:+421940634115"
                className="absolute opacity-0 -bottom-20 group-hover:opacity-100 group-hover:bottom-12 text-white left-4 duration-700 flex gap-2 hover:text-greeno"
              >
                <Image
                  src="/phone.svg"
                  className=""
                  alt="phone icon"
                  width={20}
                  height={20}
                />{" "}
                +421 940 634 115
              </a>

              <a
                href="mailto:info@noevi.au"
                className="absolute opacity-0 -bottom-20 group-hover:opacity-100 group-hover:bottom-6 text-white left-4 duration-700 flex gap-2 hover:text-greeno"
              >
                <Image
                  src="/envelope.svg"
                  className=""
                  alt="phone icon"
                  width={20}
                  height={20}
                />{" "}
                info@noevi.au
              </a>
            </div>
          </figure>
          <div className="card-body flex flex-col gap-2 items-center p-4">
            <h2 className="card-title text-xl font-bold">Anna Rosenthal</h2>
            <h2 className="card-title text-xl font-bold text-greeno">
              Head of the Finance department
            </h2>
            <p className="text-justify">
              A results-oriented finance expert, Anna ensures stability and
              transparency while driving financial innovation and strategic
              planning.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm group relative overflow-hidden cursor-pointer">
          <figure className="relative">
            <img
              src="/jonas.jpg"
              alt="Jonas Bergmann"
              className="h-96 w-full object-cover transition duration-300"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300">
              <a
                href="tel:+421940634115"
                className="absolute opacity-0 -bottom-20 group-hover:opacity-100 group-hover:bottom-12 text-white left-4 duration-700 flex gap-2 hover:text-greeno"
              >
                <Image
                  src="/phone.svg"
                  className=""
                  alt="phone icon"
                  width={20}
                  height={20}
                />{" "}
                +421 940 634 115
              </a>

              <a
                href="mailto:info@noevi.au"
                className="absolute opacity-0 -bottom-20 group-hover:opacity-100 group-hover:bottom-6 text-white left-4 duration-700 flex gap-2 hover:text-greeno"
              >
                <Image
                  src="/envelope.svg"
                  className=""
                  alt="phone icon"
                  width={20}
                  height={20}
                />{" "}
                info@noevi.au
              </a>
            </div>
          </figure>
          <div className="card-body flex flex-col gap-2 items-center p-4">
            <h2 className="card-title text-xl font-bold">Jonas Bergmann</h2>
            <h2 className="card-title text-xl font-bold text-greeno">
              Head of the Technical department
            </h2>
            <p className="text-justify">
              Jonas brings deep technical insight and a love for cutting-edge
              solutions, leading teams to build reliable and future-ready
              systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
