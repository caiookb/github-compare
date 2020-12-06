import React from "react";
import { icons } from "../../assets/icons";

const Icon = ({ icon, padding, backgroundColor, color, radius, onClick }) => {
  return (
    <i
      style={{
        color: color,
        backgroundColor: backgroundColor,
        padding: `${padding - 2}px ${padding}px`,
        borderRadius: radius,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <svg class="lexicon-icon" focusable="false" role="presentation">
        <use xlinkHref={`${icons}#${icon}`} />
      </svg>
    </i>
  );
};

export default Icon;

Icon.defaultProps = {
  color: "#6B6C7E",
  backgroundColor: "unset",
  padding: 5,
  radius: 0,
};
