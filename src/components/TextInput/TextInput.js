import React from "react";
import Icon from "../Icon/Icon";
import styles from "./TextInput.module.css";

const TextInputIcon = ({ icon }) => {
  return (
    <div class="input-group-inset-item input-group-inset-item-after">
      <button class="btn btn-unstyled d-none d-md-inline-block" type="button">
        <Icon icon={icon} />
      </button>
    </div>
  );
};

const TextInput = (props) => {
  const { placeholder, icon, value, onChange, width, label } = props;
  return (
    <div class="input-group">
      <div class="input-group-item">
        <label>{label}</label>
        <input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`form-control input-group-inset ${
            icon ? " input-group-inset-after" : ""
          } ${styles.input}`}
          style={{ width: width }}
        />
        {icon ? <TextInputIcon icon={icon} /> : null}
      </div>
    </div>
  );
};

export default TextInput;
