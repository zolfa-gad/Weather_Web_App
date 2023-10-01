import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import DaysDegreeSection from "./days-degree-section";
import HoursDegreeSection from "./hours-degree-section";
import HeadingSection from "./heading-section";
import axios from "axios";
import sunBG from "../../images/sun.jpg";
import rainBG from "../../images/rain.jpg";
import cloudBG from "../../images/cloud.jpg";
import clearBG from "../../images/clear.jpg";

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
  const [locationInput, setLocationInput] = useState("sohag");
  const [backgroundImage, setBackgroundState] = useState(clearBG);

  useEffect(() => {
    // setBackgroundImage();
    if (locationInput.length >= 3) {
      getDataFromApi();
    } else if (locationInput.length == 0) {
      // setLocationInput("sohag");
      // getDataFromApi();
    }
  }, [locationInput]);

  useEffect(() => {
    setBackgroundImage();
  }, [forecast]);

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

  function setBackgroundImage() {
    let weatherCondition = forecast.current.condition.text;
    // const background = document.getElementsByClassName("background")[0];
    // sunny
    // partly cloudy
    // overcast
    // clear
    // patch light drizzle
    // mist
    // light rain shower
    // patchy rain possible
    // background.style.backgroundImage = "url('../../images/sunny.jpg')";
    console.log(weatherCondition, "condition");
    if (weatherCondition.toLocaleLowerCase().includes("clear")) {
      setBackgroundState(clearBG);
      // background.style.backgroundColor = "lightblue";
    } else if (weatherCondition.toLocaleLowerCase().includes("sun")) {
      setBackgroundState(sunBG);
      // background.style.backgroundColor = "orange";
    } else if (weatherCondition.toLocaleLowerCase().includes("cloud")) {
      setBackgroundState(cloudBG);
      // background.style.backgroundColor = "grey";
    } else if (weatherCondition.toLocaleLowerCase().includes("rain")) {
      setBackgroundState(rainBG);
      // background.style.backgroundColor = "lightgrey";
    } else if (weatherCondition.toLocaleLowerCase().includes("overcast")) {
      setBackgroundState(clearBG);
      // background.style.backgroundColor = "lightgreen";
    } else {
      // background.style.backgroundColor = "black";
    }
  }

  function onLocationInputChange(event) {
    console.log(event.target.value);
    setLocationInput(event.target.value);
  }

  function onSubmitLocation() {
    console.log("jsdhjsdhfsdjfh");
    setLocationInput("");
  }

  return (
    <div className="Home h-100 p-sm-4 p-2">
      <Container
        className=" h-100  shadow  rounded-4 d-flex flex-column justify-content-center align-items-center "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit:'cover'
          // background: `url(${sunnyBackground})`,
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
