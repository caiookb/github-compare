import React from "react";
import Icon from "../Icon/Icon";
import styles from "./Button.module.css";

const Button = ({ title, icon, btnClass, onClick, type }) => {
  return (
    <button
      className={`btn btn-${btnClass} ${styles.button}`}
      onClick={onClick}
      type={type}
    >
      {title}
      {icon ? <Icon icon={icon} /> : null}
    </button>
  );
};

export default Button;
