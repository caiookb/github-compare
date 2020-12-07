import React from "react";
import ClayButton from "@clayui/button";

const ErrorView = (props) => {
  const { title, subtitle, buttonTitle, color, onClick, image } = props;

  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        maxWidth: 360,
        fontWeight: 700,
      }}
      data-testid="errorView"
    >
      <img src={image} />
      <h2 style={{ marginTop: 40, color: "#272833" }}>{title}</h2>
      <h4 style={{ marginTop: 8, color: "#6B6C7E", fontWeight: 400 }}>
        {subtitle}
      </h4>

      {onClick ? (
        <ClayButton
          onClick={onClick}
          displayType={color}
          style={{ marginTop: 20 }}
        >
          {buttonTitle}
        </ClayButton>
      ) : null}
    </div>
  );
};

export default ErrorView;
