import React from "react";
import styles from "@/styles/catalouge.module.css";
import { FC } from "react";
//import hotel from "@/public/assets/house.jpg"
import { AiFillStar } from "react-icons/ai";
const iconsize = 20
const Card = () => {
  return (
    <div>
      <img
        src="https://picsum.photos/315/287"
        alt="prop1"
        className={styles.card_img}
      />
      <div className={styles.card_style}>
        <h3 className={styles.card_title}>place</h3>
        <div className={styles.card_rating}>
          <AiFillStar size={iconsize} />
          <p>4.5</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
