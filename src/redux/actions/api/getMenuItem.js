import api from "../../../api";

const getMenuItem = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/view-items?category_id=${id}`);
    dispatch({
      type: "GET__MENU__ITEM",
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: "GET__MENU__ITEM",
      payload: error.response.data,
    });
  }
};

export default getMenuItem;