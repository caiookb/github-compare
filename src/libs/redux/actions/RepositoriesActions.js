import { RepositoriesTypes } from "../types";

export const saveRepositories = (user) => ({
  type: RepositoriesTypes.SAVE_REPOSITORIES,
  payload: user,
});

export const cleanrRepositories = () => ({
  type: RepositoriesTypes.CLEAN_REPOSITORIES,
  payload: {},
});
