import React, { useState } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import TextInput from "../TextInput/TextInput";
import styles from "./InputDropdown.module.css";

const InputDropdown = (props) => {
  const { onClick } = props;

  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  return (
    <div className={styles.menuDropdown}>
      <Icon {...props} onClick={() => setActive(active ? false : true)} />

      {active ? (
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <h4>New Repository</h4>
            <TextInput
              width={"100%"}
              label={"Repository"}
              value={value}
              onChange={setValue}
            />

            <div
              style={{
                color: "#DA1414",
                minHeight: 20,
              }}
            >
              {error ? (
                <>
                  <Icon icon={"exclamation-full"} color="#DA1414" />
                  {error}
                </>
              ) : null}
            </div>
          </div>
          <div className={styles.cardBottom}>
            <Button
              btnClass={"secondary"}
              title={"Cancel"}
              onClick={() => setActive(false)}
            />
            <Button
              btnClass={"primary"}
              title={"Add"}
              onClick={() =>
                onClick(value).catch((err) => {
                  setError(err.message);
                  setTimeout(() => {
                    setError(false);
                  }, 4000);
                })
              }
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default InputDropdown;
