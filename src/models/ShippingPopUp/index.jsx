import React from "react";
import styles from "./.module.scss";
import { RiSearchLine } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import Modal from "../../components/Modal";
import PopUpWrapper from "../../components/PopUpWrapper";

export default function ShippingPopUp() {
  return (
    <Modal maxWidth="696px" id={"shipping__modal"}>
      <div className={styles.shipping__popup__wrapper}>
        <PopUpWrapper title={"Address for Shipping"} id={"shipping__modal"}>
          <div className={styles.search__form__wrapper}>
            <form className={styles.search__form}>
              <RiSearchLine />
              <input
                type="text"
                className={styles.search__input}
                placeholder={"Find a location, a street, or a landmark..."}
              />
            </form>
          </div>
          <div className={styles.map__wrapper}></div>
          <footer className={styles.footer}>
            <button
              data-bs-toggle="modal"
              data-bs-target={`#shipping__modal`}
              className={styles.submit__btn}
            >
              <div>
                <HiLocationMarker />
                <span>Deliver Here</span>
              </div>
            </button>
            <p className={styles.shipping__address}>
              <span>Deliver to :</span> 10th of Ramadan - 16th District
            </p>
          </footer>
        </PopUpWrapper>
      </div>
    </Modal>
  );
}
