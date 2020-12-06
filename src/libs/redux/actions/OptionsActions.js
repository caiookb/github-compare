import { OptionsTypes } from "../types";

export const setFavorite = (trigger) => ({
  type: OptionsTypes.SET_FAVORITE_FILTER,
  payload: trigger,
});

export const setCardView = (view) => ({
  type: OptionsTypes.SET_CARDS_VIEW,
  payload: view,
});

export const setDarkMode = (trigger) => ({
  type: OptionsTypes.SET_DARK_MODE,
  payload: trigger,
});

export const setupUserOptions = (options) => ({
  type: OptionsTypes.SETUP_USER_OPTIONS,
  payload: options,
});
