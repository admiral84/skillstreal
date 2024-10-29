import React from "react";
import styles from "./cours.module.css";
import Image from "next/image";
import Link from "next/link";
import { getCours } from "../lib/data";
/*Fetching data with an api*/
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/cours");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
};
//fetching data without api
//const cour = await getCours();
//console.log(cour);
//console.log("Fetched courses:", cour);
const AllCourses = async () => {
  const cour = await getData();
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
};

export default AllCourses;
