import { combineReducers } from "redux";
import RepositoriesReducer from "./RepositoriesReducer";
import OptionsReducer from "./OptionsReducer";

export default combineReducers({
  repositories: RepositoriesReducer,
  userOptions: OptionsReducer,
});
