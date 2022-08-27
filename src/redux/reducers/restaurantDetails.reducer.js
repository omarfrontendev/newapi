const RestaurantDetailsReducer = (RestaurantDetails = {}, action) => {

  switch (action.type) {
    case "GET__RESTAURANT__DETAILS":
      return {...RestaurantDetails, ...action.payload};
    case "CLEAR__RESTAURANT__DETAILS":
      return {...action.payload};
    default:
      return {...RestaurantDetails};
  }

};

export default RestaurantDetailsReducer;