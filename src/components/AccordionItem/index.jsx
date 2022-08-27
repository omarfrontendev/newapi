import React from "react";
import styles from "./.module.scss";
import { RiArrowDownSFill } from "react-icons/ri";

export default function AccordionItem({ 
  parentID, 
  id, 
  children,
  title, 
  setCurrentActive 
}) {
  return (
    <div className={styles.accordion__item}>
      <button
        className={`${styles.accordion__item__btn}`}
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
        aria-expanded="false"
        aria-controls={id}
        onClick={() => setCurrentActive && setCurrentActive(id)}
      >
        <span className={styles.accordion__item__title}>{title}</span>
        <span className={styles.arrow__icon}>
          <RiArrowDownSFill />
        </span>
      </button>
      <div
        id={id}
        className="accordion-collapse collapse"
        data-bs-parent={`#${parentID}`}
      >
        <div className={styles.accordion__item__body}>{children}</div>
      </div>
    </div>
  );
}
