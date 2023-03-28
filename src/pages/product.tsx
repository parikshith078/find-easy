import Header from "@/components/Header";
import Fotter from "@/components/Fotter";
import styles from "@/styles/Product.module.css";
import { MdIosShare } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/Ai";
import Image from "next/image";
import { FC } from "react";

function product() {
  return (
    <div className="wrapper">
      <Header />
      <div className={styles.main}>
        <div>
          <div className={styles.bigimg}>
            <Image
              src="/assets/home.jpg"
              alt="My Image"
              width={607}
              height={450}
            />
          </div>

          <div className={styles.img}>
            <Image
              className={styles.smallimg}
              src="/assets/kit.jpg"
              alt="Other pic"
              width={302}
              height={248}
            />
            <Image
              className={styles.smallimg1}
              src="/assets/liv.jpg"
              alt="Other pic"
              width={302}
              height={248}
            />
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.iconsSet}>
            <a href="#">
              <AiOutlineHeart size="35" />
            </a>
            <a href="#">
              <MdIosShare size="30" />
            </a>
          </div>
          <h1 className={styles.name}>
            <strong>Modern Flats and Apartments</strong>
          </h1>
          <h2 className={styles.price}>₹ 1.4 Cr</h2>
          <h3 className={styles.details}>3 Bedroom|2000 sq feet</h3>
          <p className={styles.location}>
            <i className="image.png"></i>
            <span>Andheri, Mumbai, India-400414</span>
          </p>

          <div className={styles.subBtn}>
            <h3 className={styles.Request}>Request a tour</h3>
          </div>
          <div className={styles.subBtn1}>
            <h3 className={styles.Request}>Contact Agent</h3>
          </div>
          <h2 className={styles.property}>About this Property</h2>
          <p className={styles.Description}>
            Best 3 BHK Independent House for modern-day lifestyle is now
            available for sale. Grab this 3 BHK property for sale in one of
            Bengaluru top location, Attibele. The property price of this unit is
            Rs 1.4 Cr. Monthly maintenance costs Rs 2000. The built-up area is
            2220 Square feet. There are 3 bedrooms and 3 bathroom.
          </p>
        </div>
      </div>
      <Fotter />
    </div>
  );
}

export default product;
