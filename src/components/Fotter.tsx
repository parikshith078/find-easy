import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { styles } from "@/tailwindStyles";

const Fotter = () => {
  const logo = "/assets/logo.png";
  const iconSize = 20;

  return (
    <div
      className={`${styles.paddingX} w-full flex flex-col items-center py-5 gap-16 bg-base-100 mb-10 `}
      id="footer"
    >
      <div className=" flex justify-between gap-14 w-full lg:flex-row md:flex-row xs:flex-col-reverse ">
        <div className=" text flex flex-col  gap-5 w-full ">
          <Image
            alt="Find Easy logo"
            src={logo}
            width={57}
            height={60}
            className=" w-16 h-[60px]"
          />
          <ul className="flex gap-6 font-light text-sm">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Docs</a>
            </li>
          </ul>
        </div>
        <div className=" lg:block md:block sm:hidden xs:hidden w-full"> </div>
        <div className=" flex-col w-full flex gap-2 ">
          <p className=" text-sm">
            Get the latest update about Properties, Sells and price drop on
            favourites
          </p>
          <div className=" flex gap-1 h-10  sm:flex-wrap ">
            <input
              className="w-[70%] lg:w-[70%] border-solid rounded-sm p-3 border-[1px] border-[#C5C5C5] "
              type="text"
              id="fname"
              name="fname"
              placeholder="Email..."
            ></input>
            <div className=" bg-primary rounded-sm flex-1 hover:bg-primary-active cursor-pointer flex justify-center items-center  ">
              <p>Subscribe</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-5 ">
        <div className=" w-full h-[3px] bg-primary  border-solid border-primary-active border-t-[1px] blur-sm  "></div>
        <div className="w-full flex justify-between opacity-70 ">
          <ul className=" flex gap-4 ">
            <li>
              <a href="#">
                <FaLinkedin size={iconSize} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter size={iconSize} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram size={iconSize} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/parikshith078/find-easy"
              >
                <FaGithub size={iconSize} />
              </a>
            </li>
          </ul>
          <p className=""> © Find Easy. All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
