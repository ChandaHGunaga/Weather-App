import "./homeTab.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Switch from "react-switch";

const HomeTab = (props: any) => {
  const [favHeart, setFavHeart] = useState(false);
  // const Data = useSelector((state: any) => state.weatherData.value);
  const Data = JSON.parse(localStorage.getItem("searchFromRedux") || "[]");
  console.log("data", Data);

  const [checked, setChecked] = useState(false);

  const previousData = JSON.parse(localStorage.getItem("fav") || "[]");

  const addFav = () => {
    const arr: any[] = [];
    previousData.map((user: any, i: number) => {
      if (user.location.woeid === Data.location.woeid) {
        arr.push("exists");
      }
    });

    if (arr.includes("exists")) {
      alert("already exists");
    } else {
      if (Data !== "") {
        previousData.push(Data);
        localStorage.setItem("fav", JSON.stringify(previousData));
        setFavHeart(!favHeart);
      } else {
        alert("empty");
      }
    }
  };
  const handleChange = () => {
    setChecked(!checked);
  };

  const onDelete = () => {};

  let icon = "";
  switch (
    Data.current_observation &&
    Data.current_observation.condition &&
    Data.current_observation.condition.text
  ) {
    case "Haze":
      icon = "icon_mostly_sunny_small.png";
      break;
    case "Mostly Sunny":
      icon = "icon_mostly_sunny_small.png";
      break;
    case "Sunny":
      icon = "icon_mostly_sunny_small.png";
      break;
    case "Clear":
      icon = "icon_mostly_sunny_small.png";
      break;

    case "Cloudy":
      icon = "icon_mostly_cloudy_small.png";
      break;
    case "Partly Cloudy":
      icon = "icon_mostly_cloudy_small.png";
      break;
    case "Mostly Cloudy":
      icon = "icon_mostly_cloudy_small.png";
      break;

    case "Rainy":
      icon = "icon_rain_small.png";
      break;
    case "Sleet":
      icon = "icon_rain_small.png";
      break;
    case " Showers":
      icon = "icon_rain_small.png";
      break;
    default:
      icon = "icon_rain_small.png";
      break;
  }
  return (
    <div className="weatherContainer">
      <div className="homeTabContainer">
        <div className="dateMobile">{props.value}</div>
        <div className="locationName">
          {Data && Data.location && Data.location.city},&nbsp;
          {Data && Data.location && Data.location.country}
        </div>
        {!favHeart ? (
          <div
            className="addFav"
            onClick={() => {
              addFav();
            }}
          >
            <div className="favImg">
              <img
                src={require("../../assets/icon_favourite.png")}
                alt="img"
                className="heartImg"
              />
            </div>
            <div className="favText">Add to favourite</div>
          </div>
        ) : (
          <div
            className="addFav"
            onClick={() => {
              setFavHeart(!favHeart);
            }}
          >
            <div className="favImg">
              <img
                src={require("../../assets/icon_favourite_Active.png")}
                alt="img"
                className="heartImg"
              />
            </div>
            <div className="favText textColor" onClick={onDelete}>
              Added to favourite
            </div>
          </div>
        )}

        <div className="weatherDisplay">
          <div className="weatherImg">
            <img
              src={require(`../../assets/${icon}`)}
              alt=""
              className="sunnyImg"
            />
          </div>
          <div className="weatherDegree">
            <div>
              {checked
                ? Data.current_observation &&
                  Data.current_observation.condition &&
                  Data.current_observation.condition.temperature
                : (
                    (Data.current_observation &&
                      Data.current_observation.condition &&
                      Data.current_observation.condition.temperature - 32) *
                    (5 / 9)
                  ).toFixed(0)}{" "}
            </div>
            <div className="switchTempature">
              <Switch
                borderRadius={4}
                onChange={handleChange}
                checked={checked}
                className="react-switch"
                offColor="transparent"
                onColor="transparent"
                uncheckedHandleIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                      color: "red",
                    }}
                  >
                    {"\u00B0"}C
                  </div>
                }
                uncheckedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                      paddingRight: 2,
                      color: "white",
                      zIndex: "2",
                    }}
                  >
                    {"\u00B0"}F
                  </div>
                }
                checkedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                      paddingRight: 2,
                      color: "white",
                    }}
                  >
                    {"\u00B0"}C
                  </div>
                }
                checkedHandleIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      color: "red",
                      fontSize: 18,
                    }}
                  >
                    {"\u00B0"}F
                  </div>
                }
              />
            </div>
          </div>
          <div className="weatherDetail">
            {Data.current_observation &&
              Data.current_observation.condition &&
              Data.current_observation.condition.text}
          </div>
        </div>
      </div>
      <div className="footerContainer">
        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_temperature_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Min-Max</div>
            <div className="minMaxDegree">
              {Data.current_observation &&
                Data.current_observation.condition &&
                Data.current_observation.condition.temperature - 3}
              &deg;-{" "}
              {Data.current_observation &&
                Data.current_observation.condition &&
                Data.current_observation.condition.temperature + 3}
              &deg;
            </div>
          </div>
        </div>

        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_precipitation_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Precipitation</div>
            <div className="minMaxDegree">
              {Data.current_observation &&
                Data.current_observation.atmosphere &&
                Data.current_observation.atmosphere.pressure}
              %
            </div>
          </div>
        </div>

        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_humidity_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Humidity</div>
            <div className="minMaxDegree">
              {Data.current_observation &&
                Data.current_observation.atmosphere &&
                Data.current_observation.atmosphere.humidity}
              %
            </div>
          </div>
        </div>

        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_wind_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Wind</div>
            <div className="minMaxDegree">
              {" "}
              {Data.current_observation &&
                Data.current_observation.wind &&
                Data.current_observation.wind.speed}{" "}
              mph
            </div>
          </div>
        </div>

        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_visibility_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Visibility</div>
            <div className="minMaxDegree">
              {Data.current_observation &&
                Data.current_observation.atmosphere &&
                Data.current_observation.atmosphere.visibility}{" "}
              mph
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
