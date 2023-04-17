import Fotter from "@/components/Fotter";
import Header from "@/components/Header";
import { styles as tailwindCss } from "@/tailwindStyles";
import { FaSearch } from "react-icons/fa";
import properties from "@/components/card/data";
import styles from "@/styles/catalouge.module.css";
import Card from "@/components/card/Card";
import React from "react";
import Select from "react-select";
import Maps from "@/components/map/Maps";

const iconSize = 20;
const icon = 30;


const catalouge = () => {
  const datacomponent = properties.map((data, id)=>{
    return(
      <Card id={data.id} key={id}
      img={data.img}
      description={data.description}
      place={data.place}
      rating={data.rating}
      price={data.price}
      speaciality={data.speaciality}
      />

    )
  })
  return (
    <div>
      <Header />
      <div className="absolute top-24">
        <div className={`${tailwindCss.paddingX}  w-screen  h-screen`}>
          <div className="flex">
            <div className=" flex justify-between items-center w-[25%] h-10 border-solid border-[1px] px-3 py-2 border-[#7E7878] rounded-lg">
              <input
                className="h-full w-[85%] "
                type="text"
                placeholder="Enter City, Area or Pincode"
              />
              <div className=" w-9 aspect-square cursor-pointer flex justify-center items-center  rounded-sm  transition-all delay-100 ">
                <FaSearch size={iconSize} />
              </div>
            </div>
            <Select
              className="w-[9%]  border-[#7E7878] rounded-lg ml-2"
              placeholder="Forsale" 
            />
            <Select
              className="w-[9%]  border-[#7E7878] rounded-lg ml-2"
              placeholder="Price"
            />
            <Select
              className="w-[9%]  border-[#7E7878] rounded-lg ml-2"
              placeholder="Room"
            />
            <Select
              className="w-[9%]  border-[#7E7878] rounded-lg ml-2"
              placeholder="Type"
            />
          </div>

          <Maps />

          <div className={styles.card_container}>
            {datacomponent}
          </div>
        </div>
        <Fotter />
      </div>
    </div>
  );
};

export default catalouge;

{
  /* <div className=" flex cursor-pointer items-center w-[8%] h-10 ml-2 border-[1px] px-3  border-[#7E7878] rounded-lg">
              <p>Forsale</p>
              <div className=" w-9 aspect-square cursor-pointer flex justify-center items-center  rounded-sm  transition-all delay-100 ">
                <BiChevronDown size={icon} />
              </div>
            </div>
            <div className=" flex  cursor-pointer items-center w-[6.5%] h-10 ml-2 border-[1px] px-3  border-[#7E7878] rounded-lg">
              <p>Price</p>
              <div  className=" w-9  aspect-square cursor-pointer flex justify-center items-center  rounded-sm  transition-all delay-100 ">
                <BiChevronDown size={icon} />
              </div>
            </div>
            <div className=" flex cursor-pointer items-center w-[7%] h-10 ml-2 border-[1px] px-3  border-[#7E7878] rounded-lg">
              <p>Room</p>
              <div className=" w-9 aspect-square cursor-pointer flex justify-center items-center  rounded-sm  transition-all delay-100 ">
                <BiChevronDown size={icon} />
              </div>
            </div>
            <div className=" flex cursor-pointer items-center w-[6.5%] h-10 ml-2 border-[1px] px-3  border-[#7E7878] rounded-lg">
              <h1>Type</h1>
              <div className=" w-9 aspect-square cursor-pointer flex justify-center items-center  rounded-sm  transition-all delay-100 ">
                <BiChevronDown size={icon} />
              </div>
            </div> */
}
