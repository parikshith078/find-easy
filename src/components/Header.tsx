import Image from "next/image";
import { FaUserTie } from "react-icons/fa";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { FC, useState } from "react";
const Header = () => {
  const logo = "/assets/logo.png";

  const [open, setOpen] = useState(true);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="">
      <header className="">
        <a href="#">
          <Image alt="Find Easy logo" src={logo} width={70} height={70} />
        </a>
        <NavBar toggleMenu={toggleMenu} isOpen={open} />
      </header>
    </div>
  );
};
export default Header;

interface navBar {
  isOpen: boolean;
  toggleMenu: any;
}

const NavBar: FC<navBar> = ({ isOpen, toggleMenu }) => {
  // const className = `menu ${isOpen ? "open" : ""}`;
  return (
    <nav className="">
      <ul className="">
        <li>
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">
            <FaUserTie size="20" />
          </a>
        </li>
      </ul>
      <div  onClick={() => toggleMenu()}>
        {isOpen ? (
          <CgCloseR  size="32" />
        ) : (
          <CgMenu size="32" />
        )}
      </div>
    </nav>
  );
};
