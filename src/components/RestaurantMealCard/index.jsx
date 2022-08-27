import React, { useState } from "react";
import styles from "./.module.scss";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiMotorbikeLine } from "react-icons/ri";
import { CgMathPlus } from "react-icons/cg";

export default function RestaurantMealCard({ 
  meal
}) {

  const [liked, setLiked] = useState(false);
  const desc = meal?.description && meal?.description.split(',');
  
  return (
    <div className={styles.res__mael__card__wrapper}>
      <div className={styles.card__left__side}>
        <div className={styles.meal__img__wrapper}>
          <img
            className={styles.meal__img}
            src={meal.image}
            alt="meal name"
          />
        </div>
        <div className={styles.meal__details}>
          <h2 className={styles.meal__name}>{meal?.name}</h2>
          <p className={styles.meal__cats}>
            {meal?.description && desc.join(' • ')}
          </p>
          <div className={styles.meal__facts}>
            <span className={styles.meal__rating}>
              <AiFillStar className={styles.star__icon} /> {Number(meal?.rating).toFixed(2)}
            </span>
            <span className={styles.meal__cooking__time}>
              <RiMotorbikeLine className={styles.bike__icon} />
              {meal?.delivery_time} MIN
            </span>
          </div>
        </div>
      </div>
      <div className={styles.card__right__side}>
        <div className={styles.meal__prices}>
          <span className={styles.old__price}>SAR {meal.old_price}</span>
          <span className={styles.current__price}>
            SAR <span className={styles.value}>{meal.price}</span>
          </span>
        </div>
        <div className={styles.add__cart__btn__wrapper}>
          <button className={styles.add__cart__btn}>
            <CgMathPlus />
          </button>
        </div>
      </div>
      <div className={styles.like__btn__wrapper}>
        <button
          className={styles.meal__like__btn}
          onClick={() => setLiked(!liked)}
        >
          {liked ? (
            <AiFillHeart className={styles.like__btn__icon} />
          ) : (
            <AiOutlineHeart className={styles.like__btn__icon} />
          )}
        </button>
      </div>
    </div>
  );
}
