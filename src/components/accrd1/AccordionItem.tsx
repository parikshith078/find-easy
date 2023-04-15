import React, { useEffect, useRef, useState } from "react";
import { Accordiondata } from "./types";
import styles from "@/styles/accord.module.css"

const AccordionItem= ({data, isOpen,btnOnClick}: {
    data:Accordiondata,
     isOpen: boolean,
     btnOnClick: () => void;
    }) => {

    const contentref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        if(isOpen) {
            const contentEl = contentref.current;

            setHeight(contentEl.scrollHeight);
        }
        else{
          setHeight(0);
        }
        
    },[isOpen]);
    return(
      <li className={`${styles.accord_item} ${isOpen ? `${styles.active}` : ''}`}>
        <h2 className={styles.accord_item_titLe}>
            <button  onClick={btnOnClick}  className={styles.accord_item_btn}>
             {data.title}
            </button>
        </h2>
        <div className={styles.accord_item_container} style={{height}}>
            <div className={styles.accord_item_content}
            ref={contentref}>
             {data.content}
            </div>
        </div>
      </li>
    );
};

export default AccordionItem;