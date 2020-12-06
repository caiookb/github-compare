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
        age: moment(res.data.created_at, "YYYYMM").fromNow(),
        lastCommit: moment(res.data.updated_at).format("ll"),
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

export const searchRepositoryByName = (name) => (dispatch) => {};
