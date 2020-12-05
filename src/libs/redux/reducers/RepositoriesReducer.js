import { RepositoriesTypes } from "../types";

const initialState = {
  repositoriesList: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RepositoriesTypes.SAVE_REPOSITORIES:
      return { ...state, repositoriesList: payload };
    case RepositoriesTypes.CLEAN_REPOSITORIES:
      return { ...state };
    default:
      return state;
  }
};
