import { useEffect, useState } from "react";
import "./recent.css";
import "./../favourite/favourite.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeModal, showModal } from "../../redux/modalSlice";

const Recent = () => {
  const [dialog, setDialog] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const recentSearchData = JSON.parse(localStorage.getItem("search") || "[]");
  useEffect(() => {
    console.log("recentSearchData", recentSearchData);
  }, [recentSearchData]);

  let icon = "";

  const goBackToHome = (i: any) => {
    let item = recentSearchData[i];
    localStorage.setItem("searchFromRedux", JSON.stringify(item));
    console.log("cl8icked");
    navigate("/");
  };
  return (
    <div>
      {JSON.stringify(recentSearchData) === "[]" ? (
        <div className="nothing">
          <div className="nothingImg">
            <img
              src={require("../../assets/icon_nothing.png")}
              alt=""
              className="notImage"
            />
          </div>
          <div className="nothingText">No Recent Search</div>
        </div>
      ) : (
        <div>
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
                <div className="favoriteHead"> Recent Search</div>
              </div>
              <div className="favright">
                <div className="search">
                  <img
                    src={require("../../assets/searchMobile.png")}
                    alt=""
                    className="searchMobileImg"
                    onClick={() => {
                      dispatch(showModal());
                      navigate("/");
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="favHead">
              <div className="cities">You recently searched for</div>
              <div
                className="removeAll"
                onClick={() => {
                  setDialog(true);
                }}
              >
                Clear All
              </div>
            </div>
            <div className="favColumnReverse">
              {" "}
              {recentSearchData.map((searchData: any, i: any) => {
                switch (
                  searchData.current_observation &&
                  searchData.current_observation.condition &&
                  searchData.current_observation.condition.text
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
                    <div className="favBody" onClick={() => goBackToHome(i)}>
                      <div className="favrouriteMobile" onClick={() => goBackToHome(i)}>
                        <div className="state">
                          {searchData &&
                            searchData.location &&
                            searchData.location.city}
                          ,{" "}
                          {searchData &&
                            searchData.location &&
                            searchData.location.country}
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
                            {searchData &&
                              searchData.current_observation &&
                              searchData.current_observation.condition &&
                              searchData.current_observation.condition
                                .temperature}
                            <span className="deg">&#8451;</span>
                          </div>
                          <div className="elementThree">
                            {searchData.current_observation &&
                              searchData.current_observation.condition &&
                              searchData.current_observation.condition.text}
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
        </div>
      )}
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
                        localStorage.removeItem("search");
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

export default Recent;
