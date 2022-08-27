import React from "react";
import styles from "../AllRestaurantsPage/.module.scss";
import PageHeader from "../../components/PageHeader";
import RestaurantCard from "../../components/RestaurantCard";

export default function SearchResultsPage() {
  const dummyRestaurants = [
    { status: "discounted", saleValue: "50%" },
    { status: "new" },
    { status: "closed" },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  return (
    <div className="search__results__page__wrapper py-5">
      <PageHeader title={"Search Results"} />
      <div className="row">
        {dummyRestaurants.map((item, i) => (
          <div key={i} className={`col-12 col-sm-6 col-lg-4 ${styles.col}`}>
            <RestaurantCard status={item.status} saleValue={item.saleValue} />
          </div>
        ))}
      </div>
    </div>
  );
}
