import Image from "next/image";
import { FaUserTie } from "react-icons/fa";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { FC, useState } from "react";
const Header = () => {
  return (
    <div className="">
      <Nav />
    </div>
  );
};
export default Header;

const Nav: FC = () => {
  const logo = "/assets/logo.png";
  const close = "/assets/close.svg";
  const menu = "/assest/menu.svg";
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handelNavClick = (title: string) => {
    setActive(title);
  };
  const handelNavDropClick = (title: string) => {
    handelNavClick(title);
    setToggle(!toggle);
  };
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo}
            alt="Logo"
            className="w-14 h-14 object-contain"
            width={50}
            height={50}
          />
        </a>
        <NavList
          navStyle="list-none hidden sm:flex flex-row gap-10"
          liStyle=" hover:text-black text-[18px] font-medium cursor-pointer"
          active={active}
          onClick={handelNavClick}
        />
        <div
          onClick={() => setToggle(!toggle)}
          className="sm:hidden flex flex-1 justify-end items-center "
        >
          {toggle ? (
            <CgCloseR className={styles.navIcon} />
          ) : (
            <CgMenu className={styles.navIcon} />
          )}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient bg-primary absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <NavList
              liStyle="font-poppins font-medium cursor-pointer text-[16px] "
              navStyle="list-none flex justify-end items-start flex-col gap-4"
              active={active}
              onClick={handelNavDropClick}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

interface navList {
  active: string;
  onClick: (title: string) => void;
  navStyle: string;
  liStyle: string;
}

const NavList: FC<navList> = ({ active, onClick, navStyle, liStyle }) => {
  return (
    <ul className={navStyle}>
      {navLinks.map((link) => {
        return (
          <li
            key={link.id}
            className={`${
              active == link.title ? "text-black" : "text-tertiary"
            } ${liStyle} `}
            onClick={() => onClick(link.title)}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "properties",
    title: "Properties",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  navIcon: "object-contain w-[28px] h-[28px] cursor-pointer",
};
