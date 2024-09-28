import React from "react";
import styles from "./footer.module.css";
function Footer() {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>
        Copyright &copy; 2024 skillstream. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
