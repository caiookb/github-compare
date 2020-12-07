import React from "react";
import Icon from "../Icon/Icon";
import styles from "./Button.module.css";

const Button = ({ title, icon, btnClass, onClick, type, disabled }) => {
  return (
    <button
      className={`btn btn-${btnClass} ${styles.button}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {title}
      {icon ? <Icon icon={icon} /> : null}
    </button>
  );
};

export default Button;
