import Image from "next/image";
import { FaUserTie } from "react-icons/fa";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { FC, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { useAuth } from "@/components/context/AuthContext";
const Header = () => {
  return (
    <div className="">
      <Nav />
    </div>
  );
};
export default Header;

const Nav: FC = () => {
  const { currentUser, logout } = useAuth();
  // TODO: add contact button to scroll to contact section

  const logo = "/assets/logo.png";

  const handelLogout = () => {
    logout();
  };

  return (
    <div className="navbar bg-base-100 px-12">
      <div className="flex-1 pb-2 ">
        <Link href="/" className="btn btn-ghost normal-case pb-2 text-2xl">
          <Image alt="logo" src={logo} width={67} height={60} />
        </Link>
      </div>
      <ul className="menu menu-horizontal px-1 font-medium mx-2 ">
        <li>
          <Link href="#footer">Contact</Link>
        </li>
      </ul>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <FaUserAlt fontSize="24" />
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            {currentUser && (
              <li>
                <a className="justify-between">Profile</a>
              </li>
            )}
            {currentUser ? (
              <li>
                <p onClick={handelLogout}>Logout</p>
              </li>
            ) : (
              <li>
                <Link href="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
