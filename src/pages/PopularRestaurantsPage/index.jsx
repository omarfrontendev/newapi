import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from "../AllRestaurantsPage/.module.scss";
import PageHeader from "../../components/PageHeader";
import RestaurantCard from "../../components/RestaurantCard";
import { getPopularRestaurants, clearReducer } from "../../redux/actions";
import LoadWrapper from "../../components/LoadWrapper";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { getPopularRestaurants, clearReducer };

const PopularRestaurantsPage = function ({
  popularRestaurants,
  getPopularRestaurants,
  clearReducer,
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await getPopularRestaurants();
      setIsLoading(false);
    })();

    return () => {
      clearReducer({ type: "POPULAR__RESTAURANTS", payload: [] });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadWrapper />
      ) : (
        <div className="popular__restaurants__page__wrapper py-5">
          <PageHeader title={"Popular Restaurants"} />
          <div className="row">
            {popularRestaurants.map((item, i) => (
              <div key={i} className={`col-12 col-sm-6 col-lg-4 ${styles.col}`}>
                <RestaurantCard type={"restaurant"} item={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularRestaurantsPage);
