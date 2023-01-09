import "../Styles/Navbar.css";
import { useState } from "react";
import Github from "../images/github-svgrepo-com.svg";
import Twitter from "../images/twitter-svgrepo-com.svg";
import FrontendMentor from "../images/frontendmentor-svgrepo-com.svg";

export function Navbar(props) {
  const [scroll, setScroll] = useState(false);

  function handleScroll() {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  window.addEventListener("scroll", handleScroll);
  /* className={scroll ? "scroll-bg" : "no-scroll-bg"} */

  return (
    <>
      <nav>
        <a href="">
          <img className="social-media-icon" src={Github} alt="Github logo" />
        </a>
        <a href="">
          <img className="social-media-icon" src={Twitter} alt="Twitter logo" />
        </a>
        <a href="">
          <img
            className="social-media-icon"
            src={FrontendMentor}
            alt="FrontendMentor logo"
          />
        </a>
      </nav>
      {props.children}
    </>
  );
}
