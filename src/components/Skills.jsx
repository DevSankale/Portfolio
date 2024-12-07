import styles from "./skills.module.css";
import img1 from "./images/java-script.png";
import img2 from "./images/react.png";
import img3 from "./images/css.png";
import img4 from "./images/html.png";

export default function Skills() {
  return (
    <div className={styles.container}>
      <p className={styles.skill}>SKILLS.</p>
      <div className={styles.skills}>
        
        <div className={styles.div}>
          <img src={img2} className={styles.skillimage} alt="React." />
          React.
        </div>
        <div className={styles.div}>
          <img src={img3} className={styles.skillimage} alt="CSS." />
          CSS.
        </div>
        <div className={styles.div}>
          <img src={img4} className={styles.skillimage} alt="HTML." />
          Html.
        </div>
        <div className={styles.div}>
          <img src={img1} className={styles.skillimage} alt="JavaScript." />
          Javascript.
        </div>
      </div>
    </div>
  );
}
