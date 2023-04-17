import styles from "@/styles/catalouge.module.css";
import HeartButton from "./HeartButton";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import card from "./cardt";
import { url } from "inspector";
const iconsize = 20;
const Card = (props) => {

  
  return (
    <div className={styles.main_card}>
      <Image
        height={217}
        width={317}
        src={props.img}
        alt="prop1"
        className={styles.card_img}
      />
      <div className={styles.card_style}>
        <h3 className={styles.card_title}>{props.palce}</h3>
        <div className={styles.card_rating}>
          <button>
            <AiFillStar size={iconsize} />
          </button>
          <p>{props.rating}</p>
          <button>
            <HeartButton listingid={""} />
          </button>
        </div>
      </div>
      <p className={styles.details}>{props.description} </p>
      <p className={styles.details}>{props.speaciality}</p>
      <p className={styles.price}>{props.price} </p>
    </div>
  );
};

export default Card;
