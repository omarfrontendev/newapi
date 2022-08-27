import React, { useEffect } from "react";
import { useState } from "react";
import LoadWrapper from "../../components/LoadWrapper";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { 
  getRestaurantDetails, 
  getItemsCategories, 
  getRestaurantInfo,
  getMenuItem
} from "../../redux/actions";
import SingleRestaurant from "../../components/SingleRestaurant";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { 
  getRestaurantDetails, 
  getItemsCategories, 
  getRestaurantInfo, 
  getMenuItem 
};

const ResturantDetailsPage = function ({
  getRestaurantDetails,
  restaurantDetails,
  getItemsCategories,
  categories,
  getRestaurantInfo,
  restaurantInfo,
}) {
  const params = useParams('SLUGRESTAURANT').SLUGRESTAURANT
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState(undefined);

  useEffect(() => {
    (async () => {
      await getRestaurantDetails(params);
      await getItemsCategories();
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setId(restaurantDetails.id);
  }, [restaurantDetails]);

  useEffect(() => {
    (async () => {
      id !== undefined && await getRestaurantInfo(id);
      id !== undefined && setIsLoading(false);
    })();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      {isLoading ? (
        <LoadWrapper />
      ) : (
        <div className="res__details__page__wrappper py-5">
          <SingleRestaurant
            name={restaurantDetails?.name}
            image={restaurantDetails?.image}
            description={restaurantDetails?.description}
            rating={restaurantDetails?.rating}
            deliveryTime={restaurantDetails?.delivery_time}
            priceRange={restaurantDetails?.price_range}
            scheduleData={restaurantDetails?.schedule_data}
            restaurantInfo={restaurantInfo}
            categories={categories}
          />
        </div>
      )}
    </>
  );
}
export default connect(mapStateToProps,mapDispatchToProps)(ResturantDetailsPage)
