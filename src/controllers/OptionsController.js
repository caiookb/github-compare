import { OptionsActions, RepositoriesActions } from "../libs/redux/actions";
import moment from "moment";

export const setCardView = (view) => (dispatch, state) => {
  const { userOptions } = state();

  const optionsStorage =
    JSON.parse(localStorage.getItem("userOptions")) || userOptions;

  optionsStorage.cardView = view;
  dispatch(OptionsActions.setCardView(view));

  localStorage.setItem("userOptions", JSON.stringify(optionsStorage));
};

export const setDarkMode = (trigger) => (dispatch, state) => {
  const { userOptions } = state();

  const optionsStorage =
    JSON.parse(localStorage.getItem("userOptions")) || userOptions;

  document.body.style.setProperty(
    "background-color",
    trigger ? "#3f3f3f" : "#f1f2f5"
  );

  optionsStorage.darkMode = trigger;
  dispatch(OptionsActions.setDarkMode(trigger));
  localStorage.setItem("userOptions", JSON.stringify(optionsStorage));
};

export const filterByFavorite = (trigger) => (dispatch, state) => {
  const { userOptions } = state();
  console.log("au?", trigger);
  const optionsStorage =
    JSON.parse(localStorage.getItem("userOptions")) || userOptions;

  const repositories =
    JSON.parse(localStorage.getItem("repositoriesList")) || [];
  const filterByFavorite = repositories.filter(
    (repository) => repository.favorite === trigger
  );

  dispatch(
    RepositoriesActions.saveRepositories(
      trigger ? filterByFavorite : repositories
    )
  );

  optionsStorage.filterFavorite = trigger;
  dispatch(OptionsActions.setFavorite(trigger));
  localStorage.setItem("userOptions", JSON.stringify(optionsStorage));
};

export const orderByCategory = (category) => (dispatch) => {
  const repositories =
    JSON.parse(localStorage.getItem("repositoriesList")) || [];
  const byNumber = ["stars", "forks", "openIssues"];

  const orderRepositories = repositories.sort((a, b) => {
    return byNumber.includes(category)
      ? b[category] - a[category]
      : moment(a[category]) - moment(b[category]);
  });

  dispatch(RepositoriesActions.saveRepositories(orderRepositories));
};

export const setupUserOptions = () => (dispatch, state) => {
  const { userOptions } = state();
  const optionsStorage =
    JSON.parse(localStorage.getItem("userOptions")) || userOptions;

  dispatch(OptionsActions.setupUserOptions(optionsStorage));
};
