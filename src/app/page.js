import React from "react";
import styles from "./home.module.css";
import Image from "next/image";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.leftside}>
        <h1 className={styles.titre}>Bienvenue dans skillstream</h1>
        <p className={styles.parag}>
          Découvrez votre potentiel avec nos ressources d’apprentissage
          gratuites et complètes, conçues pour vous aider à exceller dans vos
          études et réussir vos examens. Que vous soyez ici pour approfondir vos
          connaissances, vous préparer aux tests ou explorer de nouveaux sujets,
          nous nous engageons à soutenir votre parcours éducatif à chaque étape.
        </p>
      </div>
      <div className={styles.rightside}>
        <Image
          src="https://www.the-rampage.org/wp-content/uploads/2020/06/shutterstock_548778247-900x600.jpg"
          alt="image"
          height={500}
          width={500}
        />
      </div>
      <br />
    </div>
  );
}

export default Home;
