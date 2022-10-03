import Card from "../Components/Card";
import { useState, useEffect } from "react";
import List from "../Components/List";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      <p>Soy el main</p>
      {users.map((user) => {
        return (
          <Card
            key={user.id}
            name={user.name}
            address={user.address.city + ", " + user.address.street}
            email={user.email}
            website={user.website}
          />
        );
      })}
      <List url={"https://jsonplaceholder.typicode.com/posts"} />
    </main>
  );
}

export default Home;
