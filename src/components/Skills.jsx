import styles from "./skills.module.css";
import img1 from "./images/javascript.png";
import img2 from "./images/reactimg.png";
import img3 from "./images/cssimg.png";
import img4 from "./images/htmlimg.png";
import img5 from './images/tailwind.png'

export default function Skills() {
  return (
    <div className={styles.container}>
      <p className={styles.skill}>SKILLS.</p>
      <div className={styles.skills}>
      <div className={styles.div}>
          <img src={img1} className={styles.skillimage} alt="JavaScript." />
        </div>
        <div className={styles.div}>
          <img src={img2} className={styles.skillimage} alt="React." />
        </div>
        <div className={styles.div}>
          <img src={img5} className={styles.skillimage} alt="Tailwind." />
        </div>
        <div className={styles.div}>
          <img src={img3} className={styles.skillimage} alt="CSS." />
        </div>
        <div className={styles.div}>
          <img src={img4} className={styles.skillimage} alt="HTML." />
        </div>
      </div>
    </div>
  );
}
