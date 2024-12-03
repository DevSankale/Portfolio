import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.show : ""}`}>
        <li><a href="#welcome">Home</a></li> 
        <li><a href="#About">About</a></li>
        <li><a href="#Project">Projects</a></li>
        <li><a href="#Contact">Contacts</a></li>
      </ul>
    </div>
  );
}
