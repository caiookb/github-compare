import React, { useRef, useState } from "react";
import styles from "./Dropdown.module.css";
import ClayDropDown from "@clayui/drop-down";
import Icon from "../Icon/Icon";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const DefaultDropdown = ({ options }) => {
  return (
    <ClayDropDown.ItemList>
      <ClayDropDown.Group header={"ORDER BY"}>
        {options?.map((item, i) => (
          <ClayDropDown.Item href={item.href} key={i}>
            {item.label}
          </ClayDropDown.Item>
        ))}
      </ClayDropDown.Group>
    </ClayDropDown.ItemList>
  );
};

const IconDropdown = ({ onClick, options }) => {
  return (
    <ClayDropDown.ItemList>
      <ClayDropDown.Group>
        {options?.map((item, i) => (
          <ClayDropDown.Item
            href={item.href}
            key={i}
            onClick={() => onClick(item.label)}
          >
            <Icon icon={item.icon} />
            {"\t\t"}
            {item.label}
          </ClayDropDown.Item>
        ))}
      </ClayDropDown.Group>
    </ClayDropDown.ItemList>
  );
};

const Dropdown = (props) => {
  const { title, options, icon } = props;
  const [active, setActive] = useState(false);

  return (
    <ClayDropDown
      trigger={
        <button
          className={`btn btn-secondary ${styles.button}`}
          onClick={() => setActive(active ? false : true)}
          style={{ color: "#6B6C7E", fontSize: 16 }}
        >
          {title}
          <Icon icon={icon} {...props} />
        </button>
      }
      active={active}
      onActiveChange={setActive}
      className={styles.dropdown}
      alignmentPosition={title ? ["tl", "bl"] : ["br", "tr"]}
    >
      {title ? (
        <DefaultDropdown options={options} />
      ) : options ? (
        <IconDropdown {...props} />
      ) : null}
    </ClayDropDown>
  );
};

export default Dropdown;
