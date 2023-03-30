import Fotter from "@/components/Fotter";
import Header from "@/components/Header";
import { styles as tailwindCss } from "@/tailwindStyles";
import { FaSearch } from "react-icons/fa";
import Maps from "@/components/Maps";
import styles from "@/styles/catalouge.module.css";
import Card from "@/components/card/Card";
const iconSize = 20;


const catalouge = () => {
  return (
    <div>
      <Header />
      <div className="absolute top-24">
        <div className={`${tailwindCss.paddingX} w-screen  h-screen`}>
          <div className=" flex justify-between items-center w-[35%] h-10 border-solid border-[1px] px-3 py-2 border-[#7E7878] rounded-lg">
            <input
              className="h-full w-[85%] "
              type="text"
              placeholder="Enter City, Area or Pincode"
            />
            <div className=" w-9 aspect-square cursor-pointer flex justify-center items-center  rounded-sm  transition-all delay-100 ">
              <FaSearch size={iconSize} />
            </div>
          </div>

          <div className={styles.maps}>
            <Maps />
          </div>
          <div className={styles.card_container}>
             <Card />
             <Card />
             <Card />
             <Card />
          </div>
        </div>
        <Fotter />
      </div>
    </div>
  );
};

export default catalouge;
