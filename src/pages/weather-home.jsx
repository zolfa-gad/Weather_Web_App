import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import DaysDegreeSection from "../components/sections/days-degree-section";
import HoursDegreeSection from "../components/sections/hours-degree-section";
import HeadingSection from "../components/sections/heading-section";
import axios from "axios";
import sunBG from "../images/sun.jpg";
import rainBG from "../images/rain.jpg";
import overcastBG from "../images/cloud.jpg";
import clearBG from "../images/clear.jpg";
import cloudBG from "../images/overcast.jpg";

const WeatherHome = () => {
  const apiKey = "ac6361c16d014b41b20161157232709";
  const initialForecast = {
    location: {
      name: "",
      region: "",
      country: "",
      localtime: "",
      tz_id: "",
    },
    current: {
      temp_c: "",
      condition: {
        text: "",
        icon: "",
      },
    },
    forecast: {
      forecastday: [
        {
          date: "",
          day: {
            maxtemp_c: 0,
            mintemp_c: 0,
            avgtemp_c: 0,

            condition: {
              text: "",
              icon: "",
            },
          },

          hour: [
            {
              temp_c: "",
              time: "g h",
              condition: {
                text: "",
                icon: "",
              },
            },
          ],
        },
      ],
    },
  };

  const [forecast, setForecastData] = useState(initialForecast);
  const [locationInput, setLocationInput] = useState("Egypt");
  const [backgroundImage, setBackgroundState] = useState(clearBG);
  const [backgroundColor, setBackgroundColorState] = useState("lightblue");

  useEffect(() => {
    if (locationInput.length >= 3) {
      getDataFromApi();
    } else {
      setLocationInput("");
    }
  }, [locationInput]);

  async function getDataFromApi() {
    const forecastURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${locationInput}&days=7&aqi=no&alerts=yes`;

    await axios
      .get(forecastURL)
      .then((response) => {
        console.log(response.data, "response");
        setForecastData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    let weatherCondition = forecast.current.condition.text;
    if (weatherCondition.toLocaleLowerCase().includes("clear")) {
      setBackgroundState(clearBG);
      setBackgroundColorState("lightblue");
    } else if (weatherCondition.toLocaleLowerCase().includes("sun")) {
      setBackgroundState(sunBG);
      setBackgroundColorState("antiquewhite");
    } else if (weatherCondition.toLocaleLowerCase().includes("cloud")) {
      setBackgroundState(cloudBG);
      setBackgroundColorState("lightgrey");
    } else if (weatherCondition.toLocaleLowerCase().includes("rain")) {
      setBackgroundState(rainBG);
      setBackgroundColorState("darkseagreen");
    } else if (weatherCondition.toLocaleLowerCase().includes("overcast")) {
      setBackgroundState(overcastBG);
      setBackgroundColorState("grey");
    } else {
      setBackgroundState(clearBG);
      setBackgroundColorState("lightblue");
    }
  }, [forecast]);

  function onLocationInputChange(event) {
    console.log(event.target.value);
    setLocationInput(event.target.value);
  }

  function onSubmitLocation() {
    setLocationInput("");
  }

  return (
    <div
      className="Home h-100 p-sm-4 p-2 "
      style={{ backgroundColor: backgroundColor }}
    >
      <Container
        className=" h-100  shadow  rounded-4 d-flex flex-column justify-content-center align-items-center "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
      >
        <HeadingSection
          location={forecast.location}
          current={forecast.current}
          forecastDay={forecast.forecast.forecastday}
          onInputChange={onLocationInputChange}
          locationInputValue={locationInput}
          onSubmit={onSubmitLocation}
        />
        <HoursDegreeSection
          hoursForecast={forecast.forecast.forecastday[0].hour}
        />
        <DaysDegreeSection daysForecast={forecast.forecast.forecastday} />
      </Container>
    </div>
  );
};

export default WeatherHome;
