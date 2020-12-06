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

const Nav = (props) => {
  const { fetchRepository } = props;
  const [active, setActive] = useState(false);

  return (
    <div className={sytles.container}>
      <ClayNav className={sytles.nav}>
        <div className={sytles.navGroup}>
          <ClayNav.Item className={sytles.navItem}>
            <img src={githubImage} />
          </ClayNav.Item>
          <ClayNav.Item className={sytles.navItem}>Github Compare</ClayNav.Item>
          <ClayNav.Item className={sytles.navItem}>
            <Dropdown title={"Filter and order"} icon={"caret-bottom"} />
          </ClayNav.Item>
        </div>

        <ClayForm.Group className={sytles.navGroup}>
          <TextInput placeholder={"Search"} icon={"search"} />
        </ClayForm.Group>

        <div className={sytles.navGroup}>
          <ClayNav.Item className={sytles.navItem}>
            <Icon icon={"star-o"} />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
