import React from "react";
import styles from "@/styles/catalouge.module.css";
import { styles as tailwindCss } from "@/tailwindStyles";
import { FC } from "react";
import HeartButton from "./Heartbutton";
//import hotel from "@/public/assets/house.jpg"
import { AiFillStar } from "react-icons/ai";
const iconsize = 20;
const Card = () => {
  return (
    <div className={styles.main_card}>
      <img
        src="/assets/house.jpg"
        alt="prop1"
        className={styles.card_img}
      />
      <div className={styles.card_style}>
        <h3 className={styles.card_title}>place</h3>
        <div className={styles.card_rating}>
          <AiFillStar size={iconsize} />
          <p>4.5</p>
          {/* <div className={styles.hbut}> */}
           {/* <HeartButton /> */}
          {/* </div> */}
          <button>
           <HeartButton />
          </button>
        </div>
      </div>
      <p className={styles.details}>description </p>
      <p className={styles.details}>speciality</p>
      <p className={styles.price}>$price</p>
    </div>
  );
};

export default Card;

