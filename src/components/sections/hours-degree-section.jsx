import React from "react";
import HourDegrees from "../resuable/hour-degrees";

const HoursDegreeSection = ({ hoursForecast,timeZone }) => {
  console.log(hoursForecast, "hours");
  return (
    <div className=" py-3 hours-section">
      <div className=" bg-light-opacity-50 p-3 d-flex  border border-2 rounded-2 justify-content-start align-items-center gap-2  shadow overflow-x-scroll">
        {hoursForecast.map((item, index) => (
          <HourDegrees
            key={`hour-${index}`}
            hour={item.time}
            degree={item.temp_c}
            icon={item.condition.icon}
          />
        ))}

      
      </div>
    </div>
  );
};

export default HoursDegreeSection;
