import React, { useEffect, useState } from "react";
import styles from "./.module.scss";
import PageHeader from "../../components/PageHeader";
import RestaurantCard from "../../components/RestaurantCard";
import { connect } from "react-redux";
import { getAllRestaurants, clearReducer } from "../../redux/actions";
import LoadWrapper from "../../components/LoadWrapper";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { getAllRestaurants, clearReducer };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function RestaurantsPage({
  allRestaurants,
  getAllRestaurants,
  clearReducer,
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await getAllRestaurants();
      setIsLoading(false);
    })();

    return () => {
      clearReducer({ type: "ALL__RESTAURANTS", payload: [] });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadWrapper />
      ) : (
        <div className="all__restaurants__page__wrapper py-5">
          <PageHeader
            filter={true}
            span={true}
            spanText={"Sort By"}
            title={"All Restaurants"}
            categories={[
              { category: "Recommended", active: true },
              { category: "Is Featured" },
              { category: "New" },
              { category: "Ratings" },
              { category: "Newest" },
              { category: "A to Z" },
              { category: "Z to A" },
            ]}
          />
          <div className="row">
            {allRestaurants.map((item, i) => (
              <div key={i} className={`col-12 col-sm-6 col-lg-4 ${styles.col}`}>
                <RestaurantCard type="restaurant" item={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
});
