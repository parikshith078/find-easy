import Fotter from "@/components/Fotter";
import Header from "@/components/Header";
import { styles as tailwindCss } from "@/tailwindStyles";
import Card from "@/components/card/Card"
import styles from "@/styles/catalouge.module.css";
import React from "react";


const card = () => {
    return (
      <div className={styles.cards}>
        <Card />
      </div>
    );
}

export default card;