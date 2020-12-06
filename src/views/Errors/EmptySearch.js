import React from "react";
import { emptyRepoImage } from "../../assets/images";
import ClayButton from "@clayui/button";
import { connect } from "react-redux";
import { RepositoryController } from "../../controllers";

const EmptySearch = (props) => {
  const { saveLocalRepoOnRedux } = props;
  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        maxWidth: 360,
        fontWeight: 700,
      }}
    >
      <img src={emptyRepoImage} />
      <h2 style={{ marginTop: 40, color: "#272833" }}>
        Something went wrong!{" "}
      </h2>
      <h4 style={{ marginTop: 8, color: "#6B6C7E", fontWeight: 400 }}>
        No results were found that matched{" "}
      </h4>
      <ClayButton
        onClick={() => {
          document.getElementById("filter").value = "";
          saveLocalRepoOnRedux();
        }}
        displayType="secondary"
      >
        {"Clear Filter"}
      </ClayButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveLocalRepoOnRedux: () =>
      dispatch(RepositoryController.saveLocalRepoOnRedux()),
  };
};

export default connect(null, mapDispatchToProps)(EmptySearch);
