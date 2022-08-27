const itemsCategoriesReducer = (categories = [], action) => {
  switch (action.type) {
    case "GET__ITEMS__CATEGORIES":
      return [...action.payload];
    case "CLEAR__ITEMS__CATEGORIES":
      return [...action.payload];
    default:
      return [...categories];
  }
};

export default itemsCategoriesReducer;