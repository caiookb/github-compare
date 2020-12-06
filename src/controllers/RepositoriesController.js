import { RepositoriesActions } from "../libs/redux/actions";
import { RepositoriesServer } from "../server";
import moment from "moment";

export const getRepositoryByName = (name) => (dispatch, state) => {
  return RepositoriesServer.fetchRepositoryByName(name)
    .then((res) => {
      const {
        repositories: { repositoriesList },
      } = state();

      const list = [...repositoriesList];

      const cleanedRepository = {
        stars: res.data.stargazers_count,
        forks: res.data.forks,
        openIssues: res.data.open_issues_count,
        age: res.data.created_at,
        lastCommit: res.data.updated_at,
        license: res.data.license?.name || "N/A",
        language: res.data.language,
        name: `${res.data.owner.login}/${res.data.name}`,
        image: res.data.owner.avatar_url,
        favorite: false,
      };

      list.push(cleanedRepository);

      dispatch(RepositoriesActions.saveRepositories(list));
      localStorage.setItem("repositoriesList", JSON.stringify(list));
    })
    .catch((error) => {
      console.log("error", error);
      throw error;
    });
};

export const saveLocalRepoOnRedux = () => (dispatch) => {
  const repos = JSON.parse(localStorage.getItem("repositoriesList"));
  dispatch(RepositoriesActions.saveRepositories(!repos ? [] : repos));
};

export const searchRepositoryByName = (name) => (dispatch) => {
  const repositories = JSON.parse(localStorage.getItem("repositoriesList"));
  const filterByName = repositories.filter((repository) =>
    repository.name.toUpperCase().includes(name.toUpperCase())
  );

  dispatch(RepositoriesActions.saveRepositories(filterByName));
};

export const markAsFavorite = (repository) => (dispatch) => {
  const repositories = JSON.parse(localStorage.getItem("repositoriesList"));
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
  const repositories = JSON.parse(localStorage.getItem("repositoriesList"));
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

export const filterByFavorite = (trigger) => (dispatch) => {
  const repositories = JSON.parse(localStorage.getItem("repositoriesList"));
  const filterByFavorite = repositories.filter(
    (repository) => repository.favorite === trigger
  );

  dispatch(
    RepositoriesActions.saveRepositories(
      trigger ? filterByFavorite : repositories
    )
  );
};

export const orderByCategory = (category) => (dispatch) => {
  const repositories = JSON.parse(localStorage.getItem("repositoriesList"));
  const orderRepositories = repositories.sort(
    (a, b) => b[category] - a[category]
  );

  console.log(orderByCategory);

  dispatch(RepositoriesActions.saveRepositories(orderRepositories));
};
