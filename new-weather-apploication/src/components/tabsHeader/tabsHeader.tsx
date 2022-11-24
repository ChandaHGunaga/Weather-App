import "./tabsHeader.css";
import "react-tabs/style/react-tabs.css";
import HomeTab from "../homeTab/homeTab";
import Favourite from "../favourite/favourite";
import Recent from "../recent/recent";
import { Route, Routes, NavLink } from "react-router-dom";
import { useState } from "react";

const TabsHeader = () => {
  const [value, onChange] = useState("");
  const date = new Date();
  setInterval(function () {
    today();
  }, 1000);

  const today = () => {
    onChange(
      `${date.toLocaleString("en-us", {
        weekday: "short",
      })} ${date.getDate()}, ${date.toLocaleString("en-us", {
        month: "short",
      })} ${date.getFullYear()}  ${date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}`
    );
  };

  return (
    <div>
      <div className="tabLinks">
        <div className="tabsSelect">
          <NavLink to="/" className="linkNames">
            HOME
          </NavLink>
          <NavLink to="/favourite" className="linkNames">
            FAVOURITE
          </NavLink>
          <NavLink to="/recent" className="linkNames">
            RECENT SEARCH
          </NavLink>
        </div>
        <div className="dateDisplay">
          <div>{value}</div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomeTab value={value} />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/recent" element={<Recent />} />
      </Routes>
    </div>
  );
};

export default TabsHeader;
