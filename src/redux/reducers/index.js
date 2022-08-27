import { combineReducers } from "redux";

// REDUCERS
import loggedUserReducer from "./loggedUser.reducer";
import serverResponseReducer from "./serverResponse.reducer";
import popularRestaurantsReducer from "./homePopularRestaurants.reducer";
import promoSlidersReducer from "./promoSliders.reducer";
import recommendItemsReducer from "./recommendItems.reducer";
import userFavouritesReducer from "./userFavourites.reducer";
import allRestaurantsReducer from "./allRestaurants.reducer";
import userCartReducer from "./userCart.reducer";
import RestaurantDetailsReducer from "./restaurantDetails.reducer";
import RestaurantInfoReducer from "./restaurantInfoReducer";
import allNotificationsReducer from "./allNotifications.reducer";
import allNotificationsReadReducer from "./markAllNotidicationsRead.reducer";
import itemsCategoriesReducer from "./itemsCategories.reducer";
import menuItemReducer from "./getMenuItem.reducer";

export default combineReducers({
  loggedUser: loggedUserReducer,
  serverResponse: serverResponseReducer,
  popularRestaurants: popularRestaurantsReducer,
  promoSliders: promoSlidersReducer,
  recommendItems: recommendItemsReducer,
  userFavourites: userFavouritesReducer,
  allRestaurants: allRestaurantsReducer,
  userCart: userCartReducer,
  restaurantDetails: RestaurantDetailsReducer,
  restaurantInfo: RestaurantInfoReducer,
  allNotifications: allNotificationsReducer,
  allNotificationsRead: allNotificationsReadReducer,
  categories: itemsCategoriesReducer,
  menuItem: menuItemReducer
});
