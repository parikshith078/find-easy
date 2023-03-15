import styles from "@/styles/Fotter.module.css";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Fotter = () => {
  const logo = "/assets/logo.svg";
  const iconSize = 20;

  return (
    <div className={styles.fotter}>
      <div className={styles.contact}>
        <div className={styles.fotterLeft}>
          <Image alt="Find Easy logo" src={logo} width={57} height={60} />
          <ul className={styles.docList}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Docs</a>
            </li>
          </ul>
        </div>
        <div className={styles.fotterRight}>
          <p className={styles.actionText}>
            Get the latest update about Properties, Sells and price drop on
            favourites
          </p>
          <div className={styles.emailDiv}>
            <input
              className={styles.emailField}
              type="text"
              id="fname"
              name="fname"
              placeholder="Email..."
            ></input>
            <div className={styles.subBtn}>Subscribe</div>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.social}>
        <ul className={styles.docList}>
          <li>
            <a href="#">
              <FaLinkedin size={iconSize} />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter size={iconSize} />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram size={iconSize} />
            </a>
          </li>
          <li>
            <a href="#">
              <FaGithub size={iconSize} />
            </a>
          </li>
        </ul>
        <p className={styles.copyright}> © Find Easy. All right reserved</p>
      </div>
    </div>
  );
};

export default Fotter;
