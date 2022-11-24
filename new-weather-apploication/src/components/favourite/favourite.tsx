import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeModal, showModal } from "../../redux/modalSlice";
import "./favourite.css";

const Favourite = () => {
  const [dialog, setDialog] = useState(false);
  const [fav, setFav] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const favData = JSON.parse(localStorage.getItem("fav") || "[]");
  console.log("favData", favData);
  let icon = "";

  const goBackToHome = (i: any) => {
    let item = favData[i];
    localStorage.setItem("searchFromRedux", JSON.stringify(item));
    console.log("cl8icked");
    navigate("/");
  };

  return (
    <div>
      <div className="favourites">
        {JSON.stringify(favData) === "[]" ? (
          <div className="nothing">
            <div className="nothingImg">
              <img
                src={require("../../assets/icon_nothing.png")}
                alt=""
                className="notImage"
              />
            </div>
            <div className="nothingText">No Favourites added</div>
          </div>
        ) : (
          <div className="favContainer">
            <div className="favHeadContainer">
              <div className="favleft">
                <div className="backBtn">
                  <img
                    src={require("../../assets/back.png")}
                    alt=""
                    className="backButtonImg"
                    onClick={() => navigate("/")}
                  />
                </div>
                <div className="favoriteHead">Favourite</div>
              </div>
              <div className="favright">
                <div className="search">
                  <img
                    src={require("../../assets/searchMobile.png")}
                    alt=""
                    className="searchMobileImg"
                    onClick={() => {
                      dispatch(showModal());
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="favHead">
              <div className="cities">
                {favData.length} City added as favourite
              </div>
              <div
                className="removeAll"
                onClick={() => {
                  setDialog(true);
                }}
              >
                Remove All
              </div>
            </div>

            <div className="favColumnReverse">
              {favData.map((favPlace: any, i: any) => {
                switch (
                  favPlace &&
                  favPlace.current_observation &&
                  favPlace.current_observation.condition.text
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
                  <div className="favBodyContainer" key={i}>
                    <div className="favBody" >
                      <div className="favrouriteMobile" onClick={() => goBackToHome(i)}>
                        <div className="state">
                          {favPlace.location.city}, {favPlace.location.country}
                        </div>
                        <div className="threeElements">
                          <div className="elementOne">
                            <img
                              src={require(`../../assets/${icon}`)}
                              alt=""
                              className="elementOneImg"
                            />
                          </div>
                          <div className="elementTwo">
                            {favPlace.current_observation.condition.temperature}
                            <span className="deg">&#8451;</span>
                          </div>
                          <div className="elementThree">
                            {favPlace.current_observation.condition.text}
                          </div>
                        </div>
                      </div>
                      <div className="fillHeart">
                        <img
                          src={require("../../assets/icon_favourite_Active.png")}
                          alt=""
                          className="fillHeartImg"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {dialog ? (
        <div>
          <div className="modalContainer">
            <div className="overlay">
              <div className="modalContent">
                <div className="infoModal">
                  Are you sure want to remove all the favourites?
                </div>
                <div className="modalButtons">
                  <form action="" className="modalForm">
                    <button className="btnNo" onClick={() => setDialog(false)}>
                      No
                    </button>
                    <button
                      className="btnNo"
                      type="button"
                      onClick={() => {
                        localStorage.removeItem("fav");
                        setDialog(false);
                      }}
                    >
                      Yes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Favourite;
