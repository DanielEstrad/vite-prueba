import "../Styles/Footer.css";

export function Footer(props) {
  return (
    <>
      {props.children}
      <footer>
        Creado y desarrollador por <a>Daniel Estrada</a>, todos los derechos
        reservados, 2023.
      </footer>
    </>
  );
}
