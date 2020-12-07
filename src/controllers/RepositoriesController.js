import moment from "moment";
import { RepositoriesActions } from "../libs/redux/actions";
import { RepositoriesServer } from "../server";

export const getRepositoryByName = (name) => (dispatch) => {
  return RepositoriesServer.fetchRepositoryByName(name)
    .then((res) => {
      const repositoriesList =
        JSON.parse(localStorage.getItem("repositoriesList")) || [];

      const list = [...repositoriesList];

      const cleanedRepository = {
        stars: res.data.stargazers_count,
        forks: res.data.forks,
        openIssues: res.data.open_issues_count,
        age: res.data.created_at,
        lastCommit: res.data.updated_at,
        license: res.data.license?.name || "N/A",
        language: res.data.language || "Other",
        name: `${res.data.owner.login}/${res.data.name}`,
        image: res.data.owner.avatar_url,
        favorite: false,
        created_at: moment(),
      };

      dispatch(
        RepositoriesActions.saveRepositories([cleanedRepository].concat(list))
      );
      localStorage.setItem(
        "repositoriesList",
        JSON.stringify([cleanedRepository].concat(list))
      );
    })
    .catch((error) => {
      if (error.response.status === 404) {
        error.message = "Repository not found on Github";
      } else {
        error.message = "Github API error, please try again in a few minutes";
      }
      throw error;
    });
};

export const saveLocalRepoOnRedux = () => (dispatch) => {
  const repos = JSON.parse(localStorage.getItem("repositoriesList")) || [];
  dispatch(RepositoriesActions.saveRepositories(!repos ? [] : repos));
};

export const searchRepositoryByName = (name) => (dispatch) => {
  const repositories =
    JSON.parse(localStorage.getItem("repositoriesList")) || [];

  const filterByName = repositories.filter((repository) =>
    repository.name.toUpperCase().includes(name.toUpperCase())
  );

  dispatch(RepositoriesActions.saveRepositories(filterByName));
};

export const markAsFavorite = (repository) => (dispatch) => {
  const repositories =
    JSON.parse(localStorage.getItem("repositoriesList")) || [];
  const repositoryToMark = repositories.find(
    (repo) => repo.name === repository.name
  );

  repositories.map((repo) =>
    repo.name === repositoryToMark.name
      ? (repo.favorite = !repo.favorite)
      : null
  );

  dispatch(RepositoriesActions.saveRepositories(repositories));
  localStorage.setItem("repositoriesList", JSON.stringify(repositories));
};

export const removeRepository = (repository) => (dispatch) => {
  const repositories =
    JSON.parse(localStorage.getItem("repositoriesList")) || [];
  const repositoryToDelete = repositories.find(
    (repo) => repo.name === repository.name
  );

  const filteringRepositories = repositories.filter(
    (repo) => repo.name !== repositoryToDelete.name
  );

  dispatch(RepositoriesActions.saveRepositories(filteringRepositories));
  localStorage.setItem(
    "repositoriesList",
    JSON.stringify(filteringRepositories)
  );
};
