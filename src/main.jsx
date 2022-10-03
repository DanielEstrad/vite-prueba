import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import { Navbar } from "./Layouts/Navbar";
import { Footer } from "./Layouts/Footer";
import "./Styles/Main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar>
      <Footer>
        <Home />
      </Footer>
    </Navbar>
  </React.StrictMode>
);
