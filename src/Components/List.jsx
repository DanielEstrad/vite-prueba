import { useState, useEffect } from "react";

function List(props) {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        setDatos(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ul>
      {datos.map((dato) => {
        return <li key={dato.id}>{dato.title}</li>;
      })}
    </ul>
  );
}

export default List;
