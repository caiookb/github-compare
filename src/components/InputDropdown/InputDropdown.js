import React, { useState } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import TextInput from "../TextInput/TextInput";
import styles from "./InputDropdown.module.css";

const InputDropdown = (props) => {
  const { onClickFunction } = props;

  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const submitRepo = (e) => {
    e.preventDefault();
    onClickFunction(value)
      .then(() => setActive(false))
      .catch((err) => {
        setError(err.message);
        setTimeout(() => {
          setError(false);
        }, 4000);
      });
  };

  return (
    <div className={styles.menuDropdown} onSubmit={(e) => submitRepo(e)}>
      <Icon {...props} onClick={() => setActive(active ? false : true)} />

      {active ? (
        <form className={styles.card}>
          <div className={styles.cardTop}>
            <h4>New Repository</h4>
            <TextInput
              width={"100%"}
              label={`Repository`}
              required={true}
              value={value}
              onChange={setValue}
              error={error}
            />

            <div className={styles.error}>
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
              type={"button"}
            />

            <Button btnClass={"primary"} title={"Add"} disabled={error} />
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default InputDropdown;
