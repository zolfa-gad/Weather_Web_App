import React from "react";
import DayDegrees from "../resuable/day-degrees";

const DaysDegreeSection = ({ daysForecast }) => {
  console.log(daysForecast, "days");
  return (
    <div className="py-3 day-section">
      <div className="bg-light-opacity-50 d-flex flex-column justify-content-center align-items-center border rounded-2  p-3 gap-2 shadow">
        {daysForecast.map((item, index) => (
          <DayDegrees
            key={`day-${index}`}
            day={item.date}
            maxDegree={item.day.maxtemp_c}
            minDegree={item.day.mintemp_c}
            icon={item.day.condition.icon}
          />
        ))}

      </div>
    </div>
  );
};

export default DaysDegreeSection;
