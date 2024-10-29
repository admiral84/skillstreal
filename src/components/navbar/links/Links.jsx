import React from "react";
import styles from "./links.module.css";
import Link from "next/link";
import { handleGithubLogin, handleGithubLogout } from "@/app/lib/action";
function Links({ session }) {
  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.lien}>home</div>
      </Link>
      <Link href="/cours">
        <div className={styles.lien}>cours</div>
      </Link>
      {!session && (
        <div className={styles.loginButton}>
          <Link href="/login">
            <button>Log In</button>
          </Link>
          <button className={styles.signinButton}>Sing In</button>
        </div>
      )}
      {session && (
        <div className={styles.logoutButton}>
          <form action={handleGithubLogout}>
            <button>Log out</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Links;
