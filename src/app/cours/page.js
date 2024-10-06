import React from "react";
import styles from "./cours.module.css";
import Image from "next/image";
import Link from "next/link";
import { getCours } from "../lib/data";

const cour = await getCours();
console.log(cour);
console.log("Fetched courses:", cour);
function AllCourses() {
  return (
    <div className={styles.container}>
      <p className={styles.accueil}>commencer maintenant</p>
      <div className={styles.hl}></div>

      <div className={styles.etiquette}>
        {cour.map((c) => (
          <div className={styles.courBloc} key={c.id}>
            <Link href={`/cours/${c.titre}`}>
              <div className={styles.imageContainer}>
                <Image src={c.img} alt="image" height={400} width={400} />
              </div>
              <p className={styles.titre}>{c.titre}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCourses;
