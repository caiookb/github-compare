import React, { useEffect, useState } from "react";
import sytles from "./Nav.module.css";
import ClayNav from "@clayui/nav";
import ClayForm from "@clayui/form";
import { Dropdown, Icon, InputDropdown, TextInput } from "../../components";
import { githubImage } from "../../assets/images";
import { connect } from "react-redux";
import { RepositoryController, OptionsController } from "../../controllers";

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
  const { fetchRepository, searchByName, orderByCategory } = props;

  const {
    cardView,
    setCardView,
    filterFavorite,
    filterByFavorite,
    setDarkmode,
    darkMode,
  } = props;

  return (
    <div className={sytles.container} id={"nav"}>
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
              onClickFunction={(e) => orderByCategory(e.value)}
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
              icon={filterFavorite ? "star" : "star-o"}
              onClick={() => {
                filterByFavorite(!filterFavorite);
              }}
            />
          </ClayNav.Item>
          <ClayNav.Item className={sytles.navItem}>
            <Icon
              icon={"adjust"}
              onClick={() => {
                setDarkmode(!darkMode);
              }}
            />
          </ClayNav.Item>
          <ClayNav.Item className={sytles.navItem}>
            <Dropdown
              icon={cardView === "cards" ? "cards2" : "cards-full"}
              options={viewTypes}
              onClickFunction={setCardView}
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
              onClickFunction={(e) => fetchRepository(e.toString())}
            />
          </ClayNav.Item>
        </div>
      </ClayNav>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    userOptions: { cardView, darkMode, filterFavorite },
  } = state;

  return {
    cardView,
    darkMode,
    filterFavorite,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepository: (repository) =>
      dispatch(RepositoryController.getRepositoryByName(repository)),
    searchByName: (name) =>
      dispatch(RepositoryController.searchRepositoryByName(name)),
    filterByFavorite: (trigger) =>
      dispatch(OptionsController.filterByFavorite(trigger)),
    orderByCategory: (category) =>
      dispatch(OptionsController.orderByCategory(category)),
    setCardView: (view) => dispatch(OptionsController.setCardView(view)),
    setDarkmode: (trigger) => dispatch(OptionsController.setDarkMode(trigger)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
