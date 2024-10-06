import { getCour } from "@/app/lib/data";
import React from "react";
import styles from "./cour.module.css";

const SingleCour = async ({ params }) => {
  const { titre } = params;
  const cour = await getCour(titre);
  return (
    <div>
      <p className={styles.title}> {cour.titre}</p>
      {console.log(cour.intro)}
      <p className={styles.introtitle}>introduction</p>
      <p className={styles.introduction}>{cour.intro}</p>
    </div>
  );
};

export default SingleCour;
