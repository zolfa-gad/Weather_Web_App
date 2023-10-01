import React from "react";
import TemperatureItem from "./temperature-item";
import IconItem from "./icon-item";
const HourDegrees = ({ hour, degree, icon }) => {
  return (
    <div className="HourDegree d-flex flex-column p-3 gap-2 border rounded-2 shadow ">
      <span className=" martian-font fs-5 " style={{ width: "80px" }}>
        {new Date(hour).toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
        })}
      </span>

      <IconItem icon={icon} />
      <TemperatureItem value={degree} />
    </div>
  );
};

export default HourDegrees;

