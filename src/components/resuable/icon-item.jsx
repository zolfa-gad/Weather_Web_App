import React from "react";

const IconItem = ({ icon }) => {
  return (
    <figure className="m-0 px-2">
      <img src={icon} style={{ width: "100%", height: "100%" }} />
    </figure>
  );
};

export default IconItem;
