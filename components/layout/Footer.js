import React from "react";
import classes from "./Footer.module.css"; // Ensure this file exists
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Ensure these icons are available
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className={classes.footer}>
      <p className={classes.me}>Developed By Mohamed Alfeky</p>
      <div className={classes.socialBtns}>
        <a
          className={`${classes.btn} ${classes.linkedin}`}
          href="https://www.linkedin.com/in/mohamed-alfeky-544274292"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow me on LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} className={classes.fa} />
          <span className="visually-hidden">Follow me on LinkedIn</span>{" "}
        </a>
        <a
          className={`${classes.btn} ${classes.youtube}`}
          href="https://www.youtube.com/watch?v=wDE5wKyTR6Y"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch my YouTube channel"
        >
          <FontAwesomeIcon icon={faYoutube} className={classes.fa} />
          <span className={classes.visuallyHidden}>
            Watch my YouTube channel
          </span>{" "}
        </a>
        <a
          className={`${classes.btn} ${classes.email}`}
          href="mailto:mo.alfeky.dev@gmail.com"
          aria-label="Send me an email"
        >
          <FontAwesomeIcon icon={faEnvelope} className={classes.fa} />
          <span className={classes.visuallyHidden}>Send me an email</span>{" "}
        </a>
        <a
          className={`${classes.btn} ${classes.myWebsite}`}
          href="https://mohamed-alfeky.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my personal website"
        >
          <FontAwesomeIcon icon={faGlobe} className={classes.fa} />
          <span className={classes.visuallyHidden}>
            Visit my personal website
          </span>{" "}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
