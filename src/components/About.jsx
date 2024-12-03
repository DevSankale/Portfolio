import styles from './about.module.css'
import pic2 from "./images/Sankale 7.jpg"

export default function About(){
  return (
    <div className={styles.projectTile} id="About">
       <img src={pic2}/>
       <div className="devdetails">
        <p>
          "
          A highly skilled web developer with a passion for creating dynamic and user-friendly web applications, I possess a strong foundation in development technologies.I have successfully delivered projects that not only meet client specifications but also enhance user experience and engagement.My expertise lies in HTML, CSS, and JavaScript, complemented by proficiency in modern frameworks such as React. I am adept at translating design concepts into responsive and interactive web interfaces, ensuring seamless functionality across various devices.I pride myself on my problem-solving abilities and attention to detail, which enable me to troubleshoot issues efficiently and optimize performance. My experience with version control systems like Git ensures that I can collaborate effectively within a team environment, maintaining code integrity and facilitating smooth project workflows.
          "
          <br/><br/>J.Sankale.
        </p>
      </div>
    </div>
  )
}