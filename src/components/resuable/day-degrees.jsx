import React from "react";
import TemperatureItem from "./temperature-item";
import IconItem from "./icon-item";

const DayDegrees = ({ day, maxDegree, minDegree, icon }) => {
  return (
    <div className="DayDegree w-100 px-2 d-flex justify-content-evenly align-items-center border  rounded-2 p-2 m-sm-2 shadow">
      <span className="fs-3 fw-bold croissant-font">
        {new Date(day).toLocaleDateString("en-us", { weekday: "short" })}
      </span>
      <IconItem icon={icon} />

      <div className="d-flex gap-md-5 gap-3">
        <TemperatureItem value={maxDegree} />
        <TemperatureItem value={minDegree} />
      </div>
    </div>
  );
};

export default DayDegrees;
