import React from "react";
import { useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { MdAdd } from "react-icons/md";
import SubmitBtn from "../SubmitBtn";
import styles from "./.module.scss";

export default function CheckoutForm({ setCheckout }) {
  const [editAdress, setEditAdress] = useState(false);
  const [data, setData] = useState({
    address: "No 03, 4th Lane,Newyourk",
  });

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={styles.checkout__form}
    >
      <div className={styles.form__content}>
        <button
          onClick={() => setCheckout(false)}
          type="button"
          className={`d-flex align-items-center ${styles.back__btn}`}
        >
          <HiArrowNarrowLeft className={styles.icon} />
          Checkout
        </button>
        <div
          className={`${styles.address__container} d-flex align-items-start justify-content-between`}
        >
          {!editAdress ? (
            <>
              <div className={styles.address}>{data.address}</div>
              <button
                onClick={() => setEditAdress(true)}
                type="button"
                className={styles.edit__address__btn}
              >
                Change
              </button>
            </>
          ) : (
            <>
              <input
                autoFocus={editAdress}
                className={styles.input}
                type="text"
                value={data?.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
              />
              <button
                onClick={() => setEditAdress(false)}
                type="button"
                className={styles.edit__address__btn}
              >
                Save
              </button>
            </>
          )}
        </div>
        <div className={styles.payment__method__conatiner}>
          <div
            className={`${styles.payment__header} d-flex align-items-start justify-content-between`}
          >
            <div className={styles.payment__title}>Payment Method</div>
            <button type="button" className={styles.add__card__btn}>
              <MdAdd className={styles.icon} /> Add Card
            </button>
          </div>
          <div className={`${styles.methods} d-flex flex-column`}>
            <div className={styles.method}>
              <input
                type="radio"
                id="cash"
                value="Cash"
                name="payment__method"
                className={`${styles.input} d-none`}
              />
              <label
                htmlFor="cash"
                className={`d-flex align-items-center justify-content-between ${styles.method__label}`}
              >
                <div className={`${styles.left} d-flex align-items-center`}>
                  <span>icon</span>
                  <span>Cash On Delivery</span>
                </div>
                <div className={styles.custom__radio}></div>
              </label>
            </div>
            <div className={styles.method}>
              <input
                type="radio"
                id="visa"
                value="Visa"
                name="payment__method"
                className={`${styles.input} d-none`}
              />
              <label
                htmlFor="visa"
                className={`d-flex align-items-center justify-content-between ${styles.method__label}`}
              >
                <div className={`${styles.left} d-flex align-items-center`}>
                  <span>icon</span>
                  <span>**** **** ****2184</span>
                </div>
                <div className={styles.custom__radio}></div>
              </label>
            </div>
            <div className={styles.method}>
              <input
                type="radio"
                id="paypal"
                value="paypal"
                name="payment__method"
                className={`${styles.input} d-none`}
              />
              <label
                htmlFor="paypal"
                className={`d-flex align-items-center justify-content-between ${styles.method__label}`}
              >
                <div className={`${styles.left} d-flex align-items-center`}>
                  <span>icon</span>
                  <span>test@email.com</span>
                </div>
                <div className={styles.custom__radio}></div>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.coupon__container}>
          <div className={styles.title}>Save on your order</div>
          <div
            className={`d-flex align-items-center justify-content-between ${styles.input__content}`}
          >
            <span>icon</span>
            <input
              className={styles.input}
              type="text"
              placeholder="enter your coupon code"
            />
            <button className={styles.btn} type="button">
              Apply
            </button>
          </div>
        </div>
        <div className={styles.payment__details}>
          <div className={styles.title}>Payment Details</div>
          <div
            className={`d-flex align-items-center justify-content-between ${styles.payment_details__row}`}
          >
            <p className={styles.details}>Subtotal</p>
            <span className={styles.value}>170.00 SAR</span>
          </div>
        </div>
      </div>
      <div
        className={`d-flex align-items-center justify-content-center ${styles.cheackout__btn}`}
      >
        <SubmitBtn onClick={() => setCheckout(true)}>Place Order</SubmitBtn>
      </div>
    </form>
  );
}
