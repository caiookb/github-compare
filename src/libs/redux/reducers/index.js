import { combineReducers } from "redux";
import RepositoriesReducer from "./RepositoriesReducer";

export default combineReducers({
  repositories: RepositoriesReducer,
});
