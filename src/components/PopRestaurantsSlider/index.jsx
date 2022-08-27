import React from "react";
import CardsRow from "../CardsRow";
import styles from "./.module.scss";
import RestaurantsSlider from "../RestaurantsSlider";

export default function PopRestaurantsSlider({ type, items }) {
  return (
    <div className={styles.pop__restaurants__slider__wrapper}>
      <CardsRow title={"Popular Restaurants"} link="/popular">
        <RestaurantsSlider type={type} items={items} />
      </CardsRow>
    </div>
  );
}
