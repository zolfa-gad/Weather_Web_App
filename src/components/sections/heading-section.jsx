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
  // console.log(location.name, "location");
  // const date = { ...location.localtime.split(" ")[0].split("-") }; //year month date
  console.log(new Date(location.localtime).toDateString(), "final date");
  return (
    <div className=" p-lg-4 py-4 w-100 d-flex flex-column justify-content-center align-items-center gap-4 ">
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

      <div className=" bg-light-opacity-50 border d-flex flex-column justify-content-center align-items-center p-3 p-md-5 py-4 shadow rounded-2 gap-3">
        <div className="location d-flex justify-content-center align-items-center gap-md-3">
          <h2 className="croissant-font fs-1 fw-bold">{location.name}</h2>
          <span className="  fw-light fs-3 " style={{width:'100px'}}>
            {new Date(location.localtime).toDateString()}
            {/* {`${date[2]}.${date[1]}.${date[0]}`} */}
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
{
  /* <div>
          <img src={current.condition.icon} style={{ width: "100px" }} />
        </div> */
}

{
  /* <span className="fs-3  satisfy-font">
            {forecastDay[0].day.maxtemp_c}&#176;
          </span> */
}
{
  /* <span className="fs-3  satisfy-font">
            {forecastDay[0].day.mintemp_c}&#176;
          </span> */
}

{
  /* <span className="fs-1 fw-bolder croissant-font">
{current.temp_c}&#176;
</span> */
}

{
  /* <span className="text-warning  fw-light" >{new Date().toLocaleDateString()}</span> */
}
