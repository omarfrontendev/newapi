import React, { useEffect, useState } from "react";
import { NoteIcon, Star } from "../../UI/icons";
import { HiLocationMarker, HiPlus } from "react-icons/hi";
import { GoDash } from "react-icons/go";
import MenuDropDown from "../MenuDropDown";
import styles from "./.module.scss";
import SubmitBtn from "../SubmitBtn";
import CheckoutForm from "../CheckoutForm";
import { connect } from "react-redux";
import { getUserCart } from "../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { getUserCart };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function CartDropdown({
  notMenu,
  onClose,
  showHeader,
  getUserCart,
  userCart,
}) {
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    getUserCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // console.log(userCart);
  }, [userCart]);

  return (
    <MenuDropDown notMenu={notMenu} onClose={onClose} showHeader={showHeader}>
      {!userCart?.items?.length ? (
        <div className={styles.empty__Cart}>
          <img className={styles.image} src="/assets/emptycart.png" alt="" />
        </div>
      ) : (
        <div className={styles.cartDropdown}>
          <div className={styles.header__dropdown}>
            <div className={`d-flex align-items-center ${styles.cart__header}`}>
              <div className={styles.header__image}>
                <img
                  className={styles.image}
                  src={userCart?.restaurant?.image}
                  alt={userCart?.restaurant?.name}
                />
              </div>
              <div className={styles.header__text}>
                <h4 className={styles.header__title}>
                  {userCart?.restaurant?.name}
                </h4>
                <div className={styles.subtitle}>
                  {userCart?.restaurant?.description}
                </div>
                <div className={`d-flex align-items-center ${styles.rating}`}>
                  <Star />
                  {Number(userCart?.restaurant?.rating).toFixed(1)}
                </div>
                <p className={`d-flex align-items-center ${styles.location}`}>
                  <HiLocationMarker />
                  {userCart?.restaurant?.address}
                </p>
              </div>
            </div>
          </div>
          {!checkout && (
            <>
              <div className={styles.dropdown__content}>
                <div className={styles.items_cart_content}>
                  <p className={styles.items_cart__title}>Items In Cart</p>
                  <div className={` d-flex flex-column ${styles.items__cart}`}>
                    {userCart?.items?.map((item, i) => (
                      <div
                        key={i}
                        className={` d-flex justify-content-between align-items-center ${styles.item__cart}`}
                      >
                        <span className={styles.item__name}>{item?.name}</span>
                        <div
                          className={`d-flex align-items-center ${styles.item_amount_control}`}
                        >
                          <button className={styles.remove}>
                            <GoDash />
                          </button>
                          <span className={styles.item__amount}>
                            {item?.quantity}
                          </span>
                          <button className={styles.add}>
                            <HiPlus />
                          </button>
                        </div>
                        <div className={styles.item__price}>
                          {item?.price * item.quantity}
                          <span className={styles.SAR}> SAR</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.note}>
                  <p className={styles.note__title}>Add a note</p>
                  <div
                    className={`d-flex align-items-center ${styles.addd__note}`}
                  >
                    <NoteIcon />
                    <input
                      className={styles.add_note__input}
                      type="text"
                      placeholder="Write anything"
                      name="add__note"
                    />
                    <button className={styles.save_note__btn}>Save</button>
                  </div>
                </div>
                <div className={styles.payment_details_content}>
                  <p className={styles.payment_details__title}>
                    Payment Details
                  </p>
                  <div
                    className={`d-flex flex-column ${styles.payment__details}`}
                  >
                    <div
                      className={`d-flex align-items-center justify-content-between ${styles.payment_details__row}`}
                    >
                      <p className={styles.details}>Subtotal</p>
                      <span className={styles.value}>
                        {userCart?.PaymentDetail?.sutotal} SAR
                      </span>
                    </div>
                    <div
                      className={`d-flex align-items-center justify-content-between ${styles.payment_details__row}`}
                    >
                      <p className={styles.details}>Delivery fee</p>
                      <span className={styles.value}>
                        {userCart?.PaymentDetail?.delivery_fee} SAR
                      </span>
                    </div>
                    <div
                      className={`d-flex align-items-center justify-content-between ${styles.payment_details__row}`}
                    >
                      <p className={styles.details}>Total amount</p>
                      <span className={`${styles.value} ${styles.total}`}>
                        {userCart?.PaymentDetail?.total_payment} SAR
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`d-flex align-items-center justify-content-center ${styles.cheackout__btn}`}
              >
                <SubmitBtn onClick={() => setCheckout(true)}>
                  Checkout
                </SubmitBtn>
              </div>
            </>
          )}
          {checkout && <CheckoutForm setCheckout={setCheckout} />}
        </div>
      )}
    </MenuDropDown>
  );
});
