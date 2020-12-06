import React from "react";
import { emptyRepoImage } from "../../assets/images";

const EmptyRepositories = () => {
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
        There is still nothing here
      </h2>
      <h4 style={{ marginTop: 8, color: "#6B6C7E", fontWeight: 400 }}>
        Add some repositories by clicking add new repository
      </h4>
    </div>
  );
};

export default EmptyRepositories;
