import Image from "next/image";
import Link from "next/link";

const WLogo = () => {
  return (
    <Link href="/">
      <Image
        src="/noeviTextGreen.png"
        alt="Noevi logo"
        height={40}
        width={100}
      />
    </Link>
  );
};

export default WLogo;
