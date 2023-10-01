import React from "react";

const TemperatureItem = ({ value, className }) => {
  return (
    <span className={className ? className : "fs-3  satisfy-font"}>
      {value}&#176;
    </span>
  );
};

export default TemperatureItem;
