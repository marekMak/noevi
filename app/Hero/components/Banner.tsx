import Logo from "@/app/components/shared/logo";
import Link from "next/link";
import Icons from "@/app/components/shared/Icons";

const Banner = () => {
  return (
    <>
      <Logo />
      <div className="w-full flex justify-center">
        <ul className="text-white text-xl flex flex-col items-left font-bold w-fit">
          <Link
            href="/technologies"
            className="cursor-pointer delay-100 transition-colors hover:text-purple"
          >
            our technology
          </Link>
          <li>
            <Link
              href="/about"
              className="cursor-pointer delay-100 transition-colors hover:text-purple"
            >
              about us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="cursor-pointer delay-100 transition-colors hover:text-purple"
            >
              contact us
            </Link>
          </li>
        </ul>
      </div>
      <Icons />
    </>
  );
};

export default Banner;
