import "../Styles/Navbar.css";

export function Navbar(props) {
  return (
    <>
      <nav>
        <img
          src="https://www.freepnglogos.com/uploads/eagle-png-logo/lakes-eagles-png-logo-14.png"
          alt="Eagle logo"
        />
        <ol>
          <li>Inicio</li>
          <li>Acerca de</li>
          <li>Iniciar sesión</li>
        </ol>
      </nav>
      {props.children}
    </>
  );
}
