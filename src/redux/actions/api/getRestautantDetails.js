import api from "../../../api";

const getRestaurantDetails = (slug) => async (dispatch) => {
  try {
    const res = await api.post(`/get-restaurant-info/${slug}`);
    dispatch({
      type: "GET__RESTAURANT__DETAILS",
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: "GET__RESTAURANT__DETAILS",
      payload: error.response.data,
    });
  }
};

export default getRestaurantDetails;