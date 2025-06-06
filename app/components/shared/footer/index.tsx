import Menu from "../header/menu";

const Footer = () => {
  return (
    <header className="w-full">
      <div className="w-full flex justify-end px-4 lg:px-20">
        <div className="flex items-center">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Footer;
