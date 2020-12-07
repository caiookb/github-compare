import React from "react";
import Icon from "../Icon/Icon";
import styles from "./Button.module.css";
import ClayButton from "@clayui/button";

const Button = (props) => {
  const { title, icon, displayType, onClick, type, disabled } = props;
  return (
    <ClayButton
      displayType={displayType}
      title={title}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={styles.button}
    >
      {title}
      {icon ? <Icon icon={icon} {...props} /> : null}
    </ClayButton>
  );
};

export default Button;
