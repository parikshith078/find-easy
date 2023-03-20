import Image from "next/image";
import { FaUserTie } from "react-icons/fa";

const Header = () => {
  const logo = "/assets/logo.svg";

  return (
    <header>
      <a href="#">
        <Image alt="Find Easy logo" src={logo} width={57} height={60} />
      </a>
      <nav>
        <ul>
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
    </header>
  );
};
export default Header;
