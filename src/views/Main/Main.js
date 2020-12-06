import React, { useEffect } from "react";
import { Card, ExpandedCard } from "../../components";
import Nav from "../Nav/Nav";
import EmptyRepositories from "../EmptyRepositories/EmptyRepositories";
import { connect } from "react-redux";
import * as RepositoryController from "../../controllers/RepositoriesController";
import styles from "./Main.module.css";
import { OptionsController } from "../../controllers";

const Main = (props) => {
  const {
    repositoriesList,
    saveLocalRepoOnRedux,
    cardView,
    setUpOptions,
  } = props;

  useEffect(() => {
    saveLocalRepoOnRedux();
    setUpOptions();
  }, []);

  const empty = repositoriesList?.length === 0;

  return (
    <div className={"container-fluid"}>
      <Nav />

      <div className="container">
        <div className={`row  ${styles.view}`}>
          {empty ? (
            <EmptyRepositories />
          ) : (
            <>
              {repositoriesList?.map((repository) =>
                cardView === "cards" ? (
                  <Card repository={repository} />
                ) : (
                  <ExpandedCard repository={repository} />
                )
              )}
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
    userOptions: { cardView },
  } = state;
  return { repositoriesList, cardView };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveLocalRepoOnRedux: () =>
      dispatch(RepositoryController.saveLocalRepoOnRedux()),
    setUpOptions: () => dispatch(OptionsController.setupUserOptions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
