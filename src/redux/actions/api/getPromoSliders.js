import api from "../../../api";

const getPromoSliders = () => async (dispatch) => {
  try {
    const res = await api.post("/promo-slider");
    dispatch({
      type: "GET__PROMO__SLIDES",
      payload: [res.data.data.mainSlide,...res.data.data.otherSlides],
    });
  } catch (error) {
    dispatch({
      type: "GET__PROMO__SLIDES",
      payload: [],
    });
  }
};

export default getPromoSliders;
