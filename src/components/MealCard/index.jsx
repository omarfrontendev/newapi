import React from "react";
import styles from "./.module.scss";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { CgTimer } from "react-icons/cg";
import FavToggleBtn from "../FavToggleBtn";

export default function MealCard({ type, item }) {
  return (
    <div className={styles.meal__card__wrapper}>
      <div className={styles.meal__like__btn__wrapper}>
        <FavToggleBtn item={item} type={type} />
      </div>
      <Link to={`/item/${item?.id}`}>
        <a className={styles.meal__card} href={`/item/${item?.id}`}>
          <div className="row g-0 w-100">
            <div className="col">
              <div className={styles.meal__description__wrapper}>
                <h3 className={styles.meal__title}>{item?.name}</h3>
                <p className={styles.restaurant__name}>Albaik Restaurant</p>
                <span className={styles.meal__dish}>
                  {item?.category?.name}
                </span>
                <div className={styles.meal__facts}>
                  <div className={styles.meal__rating}>
                    <AiFillStar className={styles.rating__icon} />
                    <span className={styles.meal__rate__value}>
                      {Number(item?.rating).toFixed(1)}
                    </span>
                  </div>
                  <div className={styles.meal__rating}>
                    <CgTimer className={"a"} />
                    <span className={styles.meal__rate__value}>
                      {item?.delivery_time} min
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={styles.meal__image_wrapper}>
              <img
                className={styles.meal__img}
                src={item?.image}
                alt={item?.name}
              />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
