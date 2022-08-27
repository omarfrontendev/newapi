import React from "react";
import styles from "./.module.scss";
import { AiFillStar } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

export default function OrderDetailsPage() {
  return (
    <div className="pt-3">
      <div className={styles.order__details__page}>
        <div className={styles.page__section__header}>
          <h3 className={styles.section__heading}>my order</h3>
        </div>
        <div className={styles.order__styled__header}>
          <div className={`${styles.left__side} d-flex align-items-center`}>
            <div className={styles.res__logo__wrapper}>
              <img
                className={styles.res__logo}
                src="/assets/unnamed.png"
                alt="logo"
              />
            </div>
            <div className={styles.order__info}>
              <h3 className={styles.order__res__name}>Pizza Hut</h3>
              <span className={styles.order__res__meals}>
                Pizza, Salad, American
              </span>
              <div className={styles.order__res__facts}>
                <div className={styles.list__item}>
                  <AiFillStar className={styles.star__icon} />
                  <span>4.5</span>
                </div>
                <div className={styles.list__item}>
                  <HiLocationMarker />
                  <span>No 03, 4th Lane, Newyork</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.order__actions__wrapper}>
            <button className={styles.order__action__btn}>Tracking</button>
            <button
              className={`${styles.order__action__btn} ${styles.cancel__btn}`}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className={styles.page__section__header}>
          <h3 className={styles.section__heading}>Order Details</h3>
        </div>
        <ul className={styles.order__details__list}>
          <li className={styles.order__item__row}>
            <span className={styles.order__item__title}>
              Mulberry Pizza by Josh x1
            </span>
            <span className={styles.order__item__price}>20 SAR</span>
          </li>
          <li className={styles.order__item__row}>
            <span className={styles.order__item__title}>
              Mulberry Pizza by Josh x1
            </span>
            <span className={styles.order__item__price}>20 SAR</span>
          </li>
          <li className={styles.order__item__row}>
            <span className={styles.order__item__title}>
              Mulberry Pizza by Josh x1
            </span>
            <span className={styles.order__item__price}>20 SAR</span>
          </li>
          <li className={styles.order__item__row}>
            <span className={styles.order__item__title}>
              Mulberry Pizza by Josh x1
            </span>
            <span className={styles.order__item__price}>20 SAR</span>
          </li>
          <li className={styles.order__item__row}>
            <span className={styles.order__item__title}>
              Mulberry Pizza by Josh x1
            </span>
            <span className={styles.order__item__price}>20 SAR</span>
          </li>
          <li className={`${styles.order__item__row} ${styles.subtotal__row}`}>
            <span className={styles.order__item__title}>Subtotal</span>
            <span className={styles.order__item__price}>
              <span className={styles.value}>100</span> SAR
            </span>
          </li>
        </ul>

        <div className={styles.page__section__header}>
          <h3 className={styles.section__heading}>Order Details</h3>
        </div>
        <ul className={styles.order__details__list}>
          <li className={styles.order__item__row}>
            <span className={styles.order__item__title}>Payment Method</span>
            <span className={styles.order__item__price}>CASH</span>
          </li>
          <li className={styles.order__item__row}>
            <span className={styles.order__item__title}>Delivery fee</span>
            <span className={styles.order__item__price}>20 SAR</span>
          </li>
          <li className={styles.order__item__row}>
            <span className={styles.order__item__title}>Discount Coupon</span>
            <span className={`${styles.order__item__price} ${styles.sale}`}>
              20 SAR
            </span>
          </li>
        </ul>
        <hr />
        <ul className={styles.order__details__list}>
          <li className={`${styles.order__item__row} ${styles.subtotal__row}`}>
            <span className={styles.order__item__title}>Total Amount</span>
            <span className={styles.order__item__price}>
              <span className={styles.value}>100</span> SAR
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
