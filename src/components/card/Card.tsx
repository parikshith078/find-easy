import styles from "@/styles/catalouge.module.css";
import HeartButton from "./HeartButton";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import React, { useState } from "react";
const iconsize = 20;
const Card = () => {
  return (
    <div className={styles.main_card}>
      <Image
        height={217}
        width={317}
        src="/assets/house.jpg"
        alt="prop1"
        className={styles.card_img}
      />
      <div className={styles.card_style}>
        <h3 className={styles.card_title}>place</h3>
        <div className={styles.card_rating}>
          <button>
            <AiFillStar size={iconsize} />
          </button>
          <p>4.5</p>
          <button>
            <HeartButton listingid={""} />
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