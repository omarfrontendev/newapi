import React, { useEffect, useState } from "react";
import RestaurantDetailsHeader from "../../components/RestaurantDetailsHeader";
import ItemDetailsRow from "../../components/ItemDetailsRow";
import RestaurantInfoList from "../../components/RestaurantInfoList";
import LoadWrapper from "../../components/LoadWrapper";
import { connect } from "react-redux";
import {
  getRestaurantInfo,
} from "../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  getRestaurantInfo,
};

 const RestaurantInfoPage = function ({
  getRestaurantInfo,
  restaurantInfo
}) {

  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     await getRestaurantInfo();
  //     setIsLoading(false);
  //     // console.log(restaurantInfo);
  //   })();

  //   return () => {
  //     // clearReducer({ type: "RECOMMEND__ITEMS", payload: [] });
  //     // clearReducer({ type: "POPULAR__RESTAURANTS", payload: [] });
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      {/* {isLoading ? ( */}
          {/* <LoadWrapper /> */}
        {/* ) : ( */}
        {/* <div className="res__info__page__wrappper py-5"> */}
          {/* <RestaurantDetailsHeader /> */}
          {/* <ItemDetailsRow /> */}
          <div className="pt-3">
            <RestaurantInfoList
              name={restaurantInfo?.name}
              deliveryTime={restaurantInfo?.delivery_time}
              deliveryCost={restaurantInfo?.delivery_cost}
              scheduleData={restaurantInfo?.schedule_data}
            />
          </div>
        {/* </div> */}
      {/* )} */}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInfoPage);