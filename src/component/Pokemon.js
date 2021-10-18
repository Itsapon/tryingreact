export default function Pokemon(props) {
  return (
    <div>
      <h2>Pokemon name: {props.name}</h2>
      <p>Weight: {props.weight} kg</p>
      <p>Awesome: {props.awesome === "yes" ? "YES!" : "Nope, not really"}</p>
      <p>Terrifying: {props.terrifying === "yes" ? "Very" : "Nah fam"}</p>
      <p>Abilities:{props.abilities}</p>
    </div>
  );
}
