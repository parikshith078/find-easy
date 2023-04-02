import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styles from "@/styles/catalouge.module.css";
import { styles as tailwindCss } from "@/tailwindStyles";
const HeartButton = () =>{
    return(
        <div>
         <AiOutlineHeart
         size={20}/>
        </div>
    );
};


export default HeartButton;