import { OptionsTypes } from "../types";

const initialState = {
  darkMode: false,
  cardView: "cards",
  filterFavorite: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  console.log(payload);
  switch (type) {
    case OptionsTypes.SET_DARK_MODE:
      return { ...state, darkMode: payload };
    case OptionsTypes.SET_CARDS_VIEW:
      return { ...state, cardView: payload };
    case OptionsTypes.SET_FAVORITE_FILTER:
      return { ...state, filterFavorite: payload };
    case OptionsTypes.SETUP_USER_OPTIONS:
      return { ...payload };
    default:
      return state;
  }
};
