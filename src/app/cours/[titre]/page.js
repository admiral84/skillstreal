//import { getCour } from "@/app/lib/data";
import React from "react";
import styles from "./cour.module.css";
/*fetching data with api*/
const getData = async (titre) => {
  const res = await fetch(`http://localhost:3000/api/cours/${titre}`);
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
};

const SingleCour = async ({ params }) => {
  const { titre } = params;
  const cour = await getData(titre);
  return (
    <div className={styles.container}>
      <p className={styles.title}> {cour.titre}</p>
      {console.log(cour.intro)}
      <p className={styles.introtitle}>introduction</p>
      <p className={styles.introduction}>{cour.intro}</p>
    </div>
  );
};

export default SingleCour;
