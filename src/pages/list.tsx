import Header from "@/components/Header";
import Fotter from "@/components/Fotter";
import { styles as tailwindCss } from "@/tailwindStyles";
import styles from "@/styles/list.module.css";
import { CgProfile } from "react-icons/cg";
import { AiOutlineEdit } from "react-icons/ai";

const icon = 150;
const editicon = 20;

const list = () => {
  return (
    <div>
      <Header />
      <div className="absolute top-24">
        <div className={`${tailwindCss.paddingX} w-screen  h-screen`}>
          <div className={styles.profile}>
            <div className={styles.headline}>
              <h1> PROFILE : </h1>
            </div>
            <button className={styles.profile_pic}>
              <CgProfile size={icon} />
            </button>
            <div className={styles.name}>
              <input
                type="text"
                placeholder="your name"
                className="w-[38%] h-full"
              />
              <button>
                <AiOutlineEdit size={editicon} />
              </button>
            </div>
            <div className="flex ml-10 mt-5 border-solid">
              <p>Contact-number :</p>
              <input type="number" className="w-[50%] " />
            </div>
            <div className="flex ml-10 mt-5 border-solid">
              <p>E-Mail :</p>
              <input type="email-id" className="w-[50%]" />
            </div>
            <div className="flex ml-10 mt-5 border-solid">
              <p>Address : </p>
              <input type="text" className="w-[50%]" />
            </div>
            <div className="flex ml-10 mt-5 border-solid">
              <p>About : </p>
              <div className=" flex ml-10 justify-between items-center w-[70%] h-24 border-solid border-[1px] px-3 py-2 border-[#7E7878] rounded-lg">
                <input
                  className="h-full w-[100%] "
                  type="text"
                  placeholder="Description about you...."
                />
              </div>
            </div>
          </div>
        </div>
        <Fotter />
      </div>
    </div>
  );
};

export default list;
