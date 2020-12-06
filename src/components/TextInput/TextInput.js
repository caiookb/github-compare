import React, { useState } from "react";
import Icon from "../Icon/Icon";
import styles from "./TextInput.module.css";

const TextInputIcon = ({ icon, onClick }) => {
  return (
    <div class="input-group-inset-item input-group-inset-item-after">
      <button class="btn btn-unstyled d-none d-md-inline-block" type="button">
        <Icon icon={icon} onClick={onClick} />
      </button>{" "}
    </div>
  );
};

const TextInput = (props) => {
  const [value, setValue] = useState("");
  const { placeholder, icon, onChange, label, width, required, error } = props;

  return (
    <div class="input-group">
      <div class="input-group-item">
        <label>
          {label}{" "}
          {required ? <span style={{ color: "#B95000" }}>*</span> : null}
        </label>

        <input
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          style={{ width }}
          className={`form-control input-group-inset  ${
            icon ? "input-group-inset-after" : null
          } ${error ? styles.error : null} ${styles.input}`}
        />
        {icon ? (
          <TextInputIcon onClick={() => onChange(value)} icon={icon} />
        ) : null}
      </div>
    </div>
  );
};

export default TextInput;
