import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Exercise from "./Pages/Exercise";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/exercise" element={<Exercise />} />
    </Routes>
  </BrowserRouter>
);
