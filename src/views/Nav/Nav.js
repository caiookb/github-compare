import React, { useState } from "react";
import sytles from "./Nav.module.css";
import ClayNav from "@clayui/nav";
import ClayForm from "@clayui/form";
import { Dropdown, Icon, InputDropdown, TextInput } from "../../components";
import { githubImage } from "../../assets/images";
import { connect } from "react-redux";
import * as RepositoryController from "../../controllers/RepositoriesController";

const viewTypes = [
  {
    label: "Cards",
    icon: "cards2",
  },
  {
    label: "List",
    icon: "cards-full",
  },
];

const filterAndOrdersOptions = [
  { value: "stars", label: "Stars" },
  { value: "forks", label: "Forks" },
  { value: "openIssues", label: "Open Issues" },
  { value: "age", label: "Age" },
  { value: "lastCommit", label: "Last commit" },
];

const Nav = (props) => {
  const {
    fetchRepository,
    searchByName,
    filterByFavorite,
    orderByCategory,
  } = props;
  const [active, setActive] = useState(false);
  const [filterAsFavorite, setFilterAsFavorite] = useState(false);

  return (
    <div className={sytles.container}>
      <ClayNav className={sytles.nav}>
        <div className={sytles.navGroup}>
          <ClayNav.Item className={sytles.navItem}>
            <img src={githubImage} />
          </ClayNav.Item>
          <ClayNav.Item className={sytles.navItem}>Github Compare</ClayNav.Item>
          <ClayNav.Item className={sytles.navItem}>
            <Dropdown
              title={"Filter and order"}
              icon={"caret-bottom"}
              options={filterAndOrdersOptions}
              onClick={(e) => orderByCategory(e.value)}
            />
          </ClayNav.Item>
        </div>

        <ClayForm.Group className={sytles.navGroup}>
          <TextInput
            placeholder={"Search"}
            icon={"search"}
            onChange={searchByName}
          />
        </ClayForm.Group>

        <div className={sytles.navGroup}>
          <ClayNav.Item className={sytles.navItem}>
            <Icon
              icon={filterAsFavorite ? "star" : "star-o"}
              onClick={() => {
                setFilterAsFavorite(!filterAsFavorite);
                filterByFavorite(!filterAsFavorite);
              }}
            />
          </ClayNav.Item>
          <ClayNav.Item className={sytles.navItem}>
            <Icon icon={"adjust"} />
          </ClayNav.Item>
          <ClayNav.Item className={sytles.navItem}>
            <Dropdown
              icon={"cards2"}
              options={viewTypes}
              onClick={() => console.log("au")}
            />
          </ClayNav.Item>
        </div>

        <div className={sytles.navGroup}>
          <ClayNav.Item className={sytles.navItem}>
            <InputDropdown
              icon={"plus"}
              backgroundColor={"#0B5FFF"}
              color={"white"}
              padding={8}
              radius={4}
              onClick={(e) => fetchRepository(e.toString())}
            />
          </ClayNav.Item>
        </div>
      </ClayNav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepository: (repository) =>
      dispatch(RepositoryController.getRepositoryByName(repository)),
    searchByName: (name) =>
      dispatch(RepositoryController.searchRepositoryByName(name)),
    filterByFavorite: (trigger) =>
      dispatch(RepositoryController.filterByFavorite(trigger)),
    orderByCategory: (category) =>
      dispatch(RepositoryController.orderByCategory(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
