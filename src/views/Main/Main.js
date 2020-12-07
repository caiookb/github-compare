import React, { useEffect } from "react";
import { Card, ExpandedCard } from "../../components";
import Nav from "../Nav/Nav";
import ErrorView from "../Errors/ErrorView";

import { connect } from "react-redux";
import * as RepositoryController from "../../controllers/RepositoriesController";
import styles from "./Main.module.css";
import { OptionsController } from "../../controllers";

import { emptyRepoImage } from "../../assets/images";

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

  const repositories =
    JSON.parse(localStorage.getItem("repositoriesList")) || [];

  const empty = repositoriesList?.length === 0;
  const failedSearch =
    repositoriesList?.length === 0 && repositories.length > 0;

  return (
    <div>
      <Nav />
      <div className="container">
        <div className={`row  ${styles.view}`}>
          {failedSearch ? (
            <ErrorView
              title={"Something went wrong!"}
              subtitle={"No results were found that matched"}
              onClick={() => {
                document.getElementById("filter").value = "";
                saveLocalRepoOnRedux();
              }}
              color={"secondary"}
              buttonTitle={"Clear Filter"}
              image={emptyRepoImage}
            />
          ) : empty ? (
            <ErrorView
              title={"There is still nothing here"}
              subtitle={"Add some repositories by clicking add new repository"}
              image={emptyRepoImage}
            />
          ) : (
            <>
              {repositoriesList?.map((repository, key) =>
                cardView === "cards" ? (
                  <Card repository={repository} key={key} />
                ) : (
                  <ExpandedCard repository={repository} key={key} />
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
