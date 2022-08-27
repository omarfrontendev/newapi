import React from "react";
import styles from "./.module.scss";
import { MatnLogo } from "../../UI/icons";

export default function Footer() {

  return (
    <footer className={`${styles.app__main__footer} ${styles.bottom__fixed}`}>
      <div
        className={`container__wrapper ${styles.app__main__footer__wrapper}`}
      >
        <div className="left__side">
          <p className={styles.copyright}>Copyright © Pick.a.</p>
          <p className={styles.copyright}>All rights reserved</p>
        </div>
        <div className="right__side">
          <p>Powered By</p>
          <MatnLogo />
        </div>
      </div>
    </footer>
  );
}
