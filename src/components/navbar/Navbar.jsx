import React from "react";
import styles from "./navbar.module.css";
import Links from "./links/Links";
import Link from "next/link";
import { auth } from "@/app/lib/auth";
async function Navbar() {
  const session = await auth();
  console.log(session);
  return (
    <div className={styles.container}>
      <div className={styles.up}>
        <div className={styles.logo}>
          <Link href="/">
            {" "}
            <h1>skillstream</h1>
          </Link>
        </div>
        <Links session={session} />
      </div>
      <div className={styles.down}>
        <span className={styles.hr}></span>
      </div>
    </div>
  );
}

export default Navbar;
