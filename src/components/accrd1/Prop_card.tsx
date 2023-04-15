import React, { useState } from "react";
import {FaLocationArrow} from "react-icons/fa"
import {AiFillCamera} from "react-icons/ai"
import { Accordiondata } from "./types";
import AccordionItem from "./AccordionItem";
import idx from 'idx'
import styles from "@/styles/accord.module.css";


const Prop_card = ({items}:{items:Array<Accordiondata>}) =>{
    const[currentIdx, setCurrentIdx] = useState(-1);
    const btnOnClick = (idx:number) => {
        setCurrentIdx(idx);

    };
    return(
      <ul className={styles.accordion}>
        {
            items.map((item, idx) => (
                <AccordionItem 
                key={idx} 
                data={item} 
                isOpen={idx === currentIdx}
                btnOnClick={()=> btnOnClick(idx)}/>
            ))
        }
      </ul>
    );
};

export default Prop_card;







{/* <div>
<h1 className="font-extrabold text-2xl">RENT A PROPERTY</h1>
<div className="flex mt-10">
   <FaLocationArrow className="mt-2"/>
   <h2 className="mt-1 ml-2">
    City : 
   </h2>
</div>
<input type="text" className=" border-solid mt-1 ml-2 border-b-2 border-[#7E7878]" />
    <div className="flex mt-10">
       <AiFillCamera className="mt-1 "/>
       <h2 className=" ml-2 ">Front view of Property : </h2>
    </div>
    <input type="file" className="mt-4 ml-2" />
</div> */}