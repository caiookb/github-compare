import React, { useEffect } from "react";
import { Card } from "../../components";
import Nav from "../Nav/Nav";
import moment from "moment";
import EmptyRepositories from "../EmptyRepositories/EmptyRepositories";
import { connect } from "react-redux";
import * as RepositoryController from "../../controllers/RepositoriesController";

const Main = (props) => {
  const { repositoriesList, saveLocalRepoOnRedux } = props;

  useEffect(() => {
    saveLocalRepoOnRedux();
  }, []);

  const empty = repositoriesList?.length === 0;

  console.log("emp", empty);

  return (
    <div className={"container-fluid"}>
      <Nav />

      <div className="container">
        <div className="row">
          {empty ? (
            <EmptyRepositories />
          ) : (
            <>
              {repositoriesList?.map((repository) => (
                <Card repository={repository} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    repositories: { repositoriesList },
  } = state;
  return { repositoriesList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveLocalRepoOnRedux: () =>
      dispatch(RepositoryController.saveLocalRepoOnRedux()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
