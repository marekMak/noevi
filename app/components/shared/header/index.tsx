import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full z-50">
      <div className="w-full flex justify-center ml-40">
        <div className="flex items-center">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
