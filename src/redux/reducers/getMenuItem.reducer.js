const menuItemReducer = (menu = [], action) => {
  switch (action.type) {
    case "GET__MENU__ITEM":
      return [...action.payload];
    case "CLEAR__MENU__ITEM":
      return [...action.payload];
    default:
      return [...menu];
  }
};

export default menuItemReducer;