import React from "react";
import styles from "./.module.scss";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { RiMotorbikeLine } from "react-icons/ri";
import { connect } from "react-redux";
import FavToggleBtn from "../FavToggleBtn";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function RestaurantCard({ type, item }) {
  const isClosed = (item) => {
    if (item?.is_schedulable) {
      const date = new Date();
      const day = date.toLocaleDateString("en", { weekday: "long" });
      // console.log(day);
      // console.log(JSON.parse(item?.schedule_data));
      // for (const day of JSON.parse(item?.schedule_data)) {
      // console.log(day);
      // }
    }
    return item?.is_schedulable ? true : false;
  };
  isClosed(item);
  return (
    <div className={styles.restaurant__card__wrapper}>
      <Link
        to={`/${type === "item" ? "item" : "restaurant"}/${
          type === "item" ? item?.id : item?.slug
        }`}
      >
        <div
          className={`${styles.restaurant__card} ${
            type === "item" && item?.is_new && styles.new
          }`}
        >
          {type === "item" && item?.is_new && (
            <span className={styles.tag}>NEW</span>
          )}
          {/* {(status === "new" || status === "discounted") && (
            <span className={styles.tag}>
              {status === "new" ? "NEW" : saleValue}
            </span>
          )} */}
          <div className={styles.closed__overlay}></div>
          <div className={styles.restaurant__logo__wrapper}>
            <img
              className={styles.restaurant__logo}
              src={item?.image}
              alt={item?.name}
            />
          </div>
          <h5 className={styles.restaurant__name}>{item?.name}</h5>
          <span className={styles.restaurant__categories}>
            {item?.description || item?.category?.name}
          </span>
          <div className={styles.restaurant__facts}>
            <div className={styles.restaurant__rating}>
              <AiFillStar className={styles.star__icon} />
              <span className={styles.rate__value}>
                {Number(item?.rating).toFixed(1)}
              </span>
            </div>
            {type === "item" && (
              <div className={styles.restaurant__rating}>
                <p className={styles.item__price}>
                  {Number(item?.price)}
                  <span className={styles.item__currency}> SAR</span>
                </p>
              </div>
            )}
            <div className={styles.restaurant__rating}>
              <RiMotorbikeLine className={styles.bike__icon} />
              <span className={styles.rate__value}>
                {item?.delivery_time} MIN
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.like__btn__wrapper}>
        <FavToggleBtn type={type} item={item} />
      </div>
    </div>
  );
});
