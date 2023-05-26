import "../Styles/Home.css";
import Person from "../images/person.png";
import JS from "../images/js.svg";
import CSS from "../images/css.svg";
import HT from "../images/html.svg";
import RT from "../images/reactjs.svg";
import React from "react";
import Github from "../images/github-svgrepo-com.svg";
import Twitter from "../images/twitter-svgrepo-com.svg";
import FrontendMentor from "../images/frontendmentor-svgrepo-com.svg";

function Home() {
  return (
    <React.Fragment>
      <header>
        <nav className="nav">
          <div className="nav__container">
            <figure className="nav__logo">
              <img src="" alt="" />
            </figure>
            <div className="nav__socialme">
              <figure>
                <img src={Github} alt="" />
              </figure>
              <figure>
                <img src={Twitter} alt="" />
              </figure>
              <figure>
                <img src={FrontendMentor} alt="" />
              </figure>
            </div>
          </div>
        </nav>
        <section className="hero-container">
          <h1 className="hero__name">Daniel <br /> Estrada</h1>

        </section>
      </header>
      {/* <main>
        <section className="hero-content">
          <div className="hero-content__text">
            <h1>Daniel Estrada</h1>
            <p>Desarrollador Web UX/UI y amante de la tecnología</p>
          </div>
          <img src={Person} alt="Developer" className="hero-content__person" />
        </section>
        <section className="technologies-reference">
          <h2>Tecnologías que manejo</h2>
          <div className="technologies-reference__images">
            <img src={RT} alt="Reactjs logo" />
            <img src={JS} alt="Javascript logo" />
            <img src={CSS} alt="CSS logo" />
            <img src={HT} alt="HTML5 logo" />
          </div>
        </section>
        <section className="technologie-skill">
          <h2>Especializado en</h2>
          <div className="technologie-skill__information">
            <div className="information__card">
              <h3>Mejores prácticas</h3>
              <p>Prácticas estandarizadas para el desarrollo de software.</p>
            </div>
            <div className="information__card">
              <h3>Diseño adaptativo</h3>
              <p>A</p>
            </div>
            <div className="information__card">
              <h3>Desarrollo estandarizado</h3>
              <p>E</p>
            </div>
          </div>
        </section>
        <section className="projects-portfolio">Portafolio</section>
      </main> */}
    </React.Fragment>
  );
}

export default Home;
