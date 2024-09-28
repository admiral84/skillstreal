import React from "react";
import styles from "./links.module.css";
import Link from "next/link";
function Links() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.lien}>home</div>
      </Link>
      <Link href="/cours">
        <div className={styles.lien}>cours</div>
      </Link>
      <div className={styles.loginButton}>
        <button>Log In</button>
      </div>
      <button className={styles.signinButton}>Sing In</button>
    </div>
  );
}

export default Links;
