import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import styles from "./hero.module.css";
import pic1 from "./images/DSC_33634.jpg";
import pic2 from "./images/DSC_33633.jpg";

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [pic1, pic2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 7000); 
    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(currentImage, {
    from: { opacity: 0, transform: "scale(1)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.8)" },
    config: { duration: 3000 },
  });

  return (
    <div className={styles.homepage}>
      <div className={styles.welcomeDiv} id="welcome">
      
        <div className={styles.imageContainer}>
          {transitions((style, index) => (
            <animated.img
              key={index}
              src={images[index]}
              alt="Portrait"
              style={style} 
              className={styles.animatedImage} 
            />
          ))}
        </div>
          <div className={styles.details}>
          <h1>
            I <b className={styles.nameIntro}>AM</b> SANKALE.
          </h1>
          <h4>A Web Developer.</h4>
          <a href="#Project" className={styles.myWork}>
            MyWork
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
