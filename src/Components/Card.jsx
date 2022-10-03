function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.address}</p>
      <p>{props.email}</p>
      <p>{props.website}</p>
    </div>
  );
}

export default Card;
