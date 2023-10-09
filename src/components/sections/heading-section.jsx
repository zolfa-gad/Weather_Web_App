import React from "react";
import FormControl from "react-bootstrap/FormControl";
import TemperatureItem from "../resuable/temperature-item";

const HeadingSection = ({
  location,
  current,
  forecastDay,
  onInputChange,
  locationInputValue,
  onSubmit,
}) => {
  console.log(new Date(location.localtime).toDateString(), "final date");
  return (
    <div className=" py-4 w-100 d-flex flex-column justify-content-center align-items-center gap-4 ">
      <div className=" search-input py-2">
        <FormControl
          className="shadow fs-4"
          size="lg"
          type="search"
          placeholder="Search Location"
          style={{ borderColor: "transparent" }}
          defaultValue={locationInputValue}
          onChange={onInputChange}
          onSubmit={onSubmit}
        />
      </div>

      <div className=" bg-light-opacity-50 border d-flex flex-column justify-content-center align-items-center p-3 p-md-5 py-4 shadow rounded-2 gap-3 search-input">
        <div className="location d-flex justify-content-center align-items-center gap-md-3">
          <h2 className="croissant-font fs-1 fw-bold">{location.name}</h2>
          <span className="  fw-light fs-3 " style={{ width: "100px" }}>
            {new Date(location.localtime).toDateString()}
          </span>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <TemperatureItem
            value={current.temp_c}
            className={"fs-1 fw-bolder croissant-font"}
          />

          <span className="fs-2  fst-italic">{current.condition.text}</span>
        </div>

        <div className="d-flex justify-content-center align-items-center gap-3">
          <TemperatureItem value={forecastDay[0].day.maxtemp_c} />
          <span className="fs-4  fw-bold">-</span>
          <TemperatureItem value={forecastDay[0].day.mintemp_c} />
        </div>
      </div>
    </div>
  );
};

export default HeadingSection;
