import "../Styles/Home.css";
import Person from "../images/person.png";
import JS from "../images/js.svg";
import CSS from "../images/css.svg";
import HT from "../images/html.svg";
import RT from "../images/reactjs.svg";

function Home() {
  return (
    <main>
      <section className="hero-content">
        <div className="hero-content__text">
          <h1>Soy Daniel Estrada</h1>
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
    </main>
  );
}

export default Home;
