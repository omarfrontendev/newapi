const RestaurantInfoReducer = (RestaurantDetails = {}, action) => {

  switch (action.type) {
    case "GET__RESTAURANT__INFO":
      return {...RestaurantDetails, ...action.payload};
    case "CLEAR__RESTAURANT__INFO":
      return {...action.payload};
    default:
      return {...RestaurantDetails};
  }

};

export default RestaurantInfoReducer;