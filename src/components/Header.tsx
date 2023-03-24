import Image from "next/image";
import { FaUserTie } from "react-icons/fa";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { FC, useState } from "react";
const Header = () => {
  const logo = "/assets/logo.svg";

  const [open, setOpen] = useState(false);

  return (
    <header>
      <a href="#">
        <Image alt="Find Easy logo" src={logo} width={57} height={60} />
      </a>
      <NavBar isOpen={open} />
      <div
        className="ham-btn"
        onClick={() => {
          setOpen(!open);
          console.log(open);
        }}
      >
        {open ? <CgCloseR size="32" /> : <CgMenu size="32" />}
      </div>
    </header>
  );
};
export default Header;

interface navBar {
  isOpen: boolean;
}

const NavBar: FC<navBar> = ({ isOpen }) => {
  const className = `menu ${isOpen ? "open" : ""}`;
  return (
    <nav>
      <ul className={className}>
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
    </nav>
  );
};
