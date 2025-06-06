import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex md:justify-center md:mr-60 lg:mr-0 lg:justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-4 items-center">
        <ul className="flex space-x-6 font-semibold">
          <Link
            href="/account"
            className="hover:text-greeno hover:font-semibold delay-150 transition-all cursor-pointer"
          >
            Account
          </Link>
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
    </div>
  );
};

export default Menu;
