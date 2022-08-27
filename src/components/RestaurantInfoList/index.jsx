import React from "react";
import styles from "./.module.scss";

const RestaurantInfoList = function ({
  restaurantInfo,
  scheduleData
}) {

  const week = ['saturday','monday','tuesday','wednesday','thursday','friday','sunday'];

  const now = new Date();
  const day = now.getDay();
  const currentDay = week[day];
  const workDay = scheduleData !== null ? scheduleData[currentDay]  : null

  const content = scheduleData !== null ? `(${currentDay.toUpperCase()}) ${workDay[0].open}AM - ${workDay[0].close}AM` : 'not now'

  const meal = {
    name: `${restaurantInfo?.name || 'Restaurant Name'}`,
    data: [
      {
        key: "Minimum Order Amount",
        value: `EGP ${restaurantInfo?.min_order_price}`,
      },
      {
        key: "Working Hours",
        value: content,
      },
      {
        key: "Delivery Time",
        value: `${restaurantInfo?.delivery_time} mins`,
      },
      {
        key: "Delivery fee",
        value: `EGP ${restaurantInfo?.delivery_cost}`,
      },
      {
        key: "Rating",
        value: `${restaurantInfo?.rating}/5`,
      },
      {
        key: "Cuisines",
        value: `${String(restaurantInfo?.description)}`,
      },
    ],
  };

  return (
    <div className={styles.info__container}>
      <div className={styles.title}>{meal.name}</div>
      <div className={`${styles.data__container} d-flex flex-column`}>
        {meal.data.map((m, i) => (
          <div
            key={i}
            className={`${styles.signle__row} d-flex justify-content-between`}
          >
            <span className={styles.data__key}>{m.key}</span>
            <span className={styles.data__value}>{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
// export default connect(mapStateToProps,mapDispatchToProps)(RestaurantInfoList)
export default RestaurantInfoList
