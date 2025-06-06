import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/noevi.png" alt="Noevi logo" height={40} width={100} />
    </Link>
  );
};

export default Logo;
