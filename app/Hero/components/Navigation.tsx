import Link from "next/link";
const Navigation = () => {
  return (
    <nav className="hidden md:flex justify-end w-full  gap-4 items-center">
      <ul className="flex space-x-6 font-semibold">
        <ul className="hover:text-greeno hover:font-semibold delay-150 transition-all cursor-pointer">
          Account
        </ul>
        <Link
          href="/about"
          className="whitespace-nowrap hover:text-greeno hover:font-semibold delay-150 transition-all cursor-pointer"
        >
          About us
        </Link>
        <Link
          href="/technologies"
          className="whitespace-nowrap hover:text-greeno hover:font-semibold delay-150 transition-all cursor-pointer"
        >
          Technologies
        </Link>
        <Link
          href="/calculation"
          className="hover:text-greeno hover:font-semibold delay-150 transition-all cursor-pointer"
        >
          Calculation
        </Link>
        <Link
          href="/contact"
          className="hover:text-greeno hover:font-semibold delay-150 transition-all cursor-pointer"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
