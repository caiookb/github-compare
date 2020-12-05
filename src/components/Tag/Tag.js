import React from "react";
import styles from "./Tag.module.css";

const Tag = ({ title }) => (
  <div className={styles.tag}>
    <p className={styles.value}>{title}</p>
  </div>
);

export default Tag;
