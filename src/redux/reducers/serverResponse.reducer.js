const serverResponseReducer = (response = {}, action) => {
  switch (action.type) {
    case "USER__REGISTER__ACTION":
      return { ...response, ...action.payload };
    case "USER__LOGIN__ACTION":
      return { ...response, ...action.payload };
    case "TOGGLE__FAV__RESTAURANT/ITEM":
      return { ...response, ...action.payload };
    case "FORGOT__PASSWORD":
      return { ...response, ...action.payload };
    default:
      return {};
  }
};

export default serverResponseReducer;
