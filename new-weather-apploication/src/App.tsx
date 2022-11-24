import Home from "./views/home/home";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import Recent from "./components/recent/recent";
import Favourite from "./components/favourite/favourite";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
