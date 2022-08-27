import userRegister from "./api/auth/userRegisterAction";
import userLogin from "./api/auth/userLoginAction";
import getPopularRestaurants from "./api/getPopularRestaurants";
import getPromoSliders from "./api/getPromoSliders";
import toggleFavourite from "./api/toggleFavourite";
import updateCurrentUser from "./updateCurrentUser";
import getRecommendItems from "./api/getRecommendItems";
import getUserFavourites from "./api/getUserFavourites";
import getAllRestaurants from "./api/getAllRestaurants";
import getUserCart from "./api/getUserCart";
import clearReducer from "./clearReducer";
import getRestaurantDetails from "./api/getRestautantDetails";
import getRestaurantInfo from "./api/getRestaurantInfo";
import getAllNotifications from "./api/getAllNotifications";
import markAllNotificationsRead from "./api/markAllNotificationsRead";
import getItemsCategories from "./api/getItemsCategories";
import getMenuItem from "./api/getMenuItem";
import forgotPassword from "./api/forgotPassword";
import markOneNotificationRead from "./api/markOneNotificationRead";

// eslint-disable-next-line import/no-anonymous-default-export
export {
  userRegister,
  userLogin,
  getPopularRestaurants,
  getPromoSliders,
  toggleFavourite,
  updateCurrentUser,
  getRecommendItems,
  getUserFavourites,
  getAllRestaurants,
  getUserCart,
  clearReducer,
  getRestaurantDetails,
  getRestaurantInfo,
  getAllNotifications,
  markAllNotificationsRead,
  getItemsCategories,
  getMenuItem,
  forgotPassword,
  markOneNotificationRead
};
