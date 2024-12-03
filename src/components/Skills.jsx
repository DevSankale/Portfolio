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
        <p>
          <img src={img1} className={styles.skillimage} alt="JavaScript." />
          Javascript.
        </p>
        <p>
          <img src={img2} className={styles.skillimage} alt="React." />
          React.
        </p>
        <p>
          <img src={img3} className={styles.skillimage} alt="CSS." />
          CSS.
        </p>
        <p>
          <img src={img4} className={styles.skillimage} alt="HTML." />
          Html.
        </p>
      </div>
    </div>
  );
}
