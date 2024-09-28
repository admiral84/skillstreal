import React from "react";
import styles from "./cours.module.css";
import Image from "next/image";
import Link from "next/link";

function page() {
  const cours = [
    {
      id: 1,
      url: "https://www.filepicker.io/api/file/obFGd7kkTE2O0vFAaeTY",
      title: "Initiation a l'algorithmique ",
    },
    {
      id: 2,
      url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/06/python-coding-1.jpg",
      title: "programmation python",
    },
    {
      id: 3,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREaYozVpxgCj3tuUK0RkaVYGH9CK-khgyB5w&s",
      title: "HTML5",
    },
    {
      id: 4,
      url: "https://www.thewindowsclub.com/wp-content/uploads/2020/09/JavaScript.jpg",
      title: "javascript",
    },
    {
      id: 5,
      url: "https://cdn.educba.com/academy/wp-content/uploads/2019/04/What-is-CSS3.jpg",
      title: "CSS3",
    },
  ];
  return (
    <div className={styles.container}>
      <p className={styles.accueil}>commencer maintenant</p>
      <div className={styles.hl}></div>
      <div className={styles.etiquette}>
        {cours.map((cour) => (
          <div className={styles.courBloc} key={cour.id}>
            <Link href="/">
              <div className={styles.imageContainer}>
                <Image src={cour.url} alt="image" width={500} height={500} />
              </div>
              <p className={styles.titre}>{cour.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
