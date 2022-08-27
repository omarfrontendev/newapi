import React from "react";
import styles from "./.module.scss";

export default function ResturantCategoriesList({ 
  setCurrentActive, 
  currentActive, 
  categories 
}) {


  return (
    <div className={styles.category__container}>
      <div className={styles.title}>Categories</div>
        <ul className={`${styles.categories} d-flex flex-column`}>
          {categories.map((c) => {
            return(
              <li
                key={String(c.id)}
                className={`${styles.category} ${
                  currentActive === String(c.name) ? styles.active : ""
                }`}
              >
                <button
                  className={styles.categ__btn}
                  onClick={() => currentActive === String(c.name) ? setCurrentActive('') : setCurrentActive(String(c.name))}
                  data-bs-toggle="collapse"
                  data-bs-target={`#${String(c.name)}`}
                  aria-expanded="false"
                  aria-controls={String(c.name)}
                >
                  {c.name}
                </button>
              </li>
            )
          })}
        </ul>
    </div>
  );
}
