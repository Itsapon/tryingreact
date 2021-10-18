import logo from "./logo.svg";
import "./App.css";
import Title from "./component/Title";
import Message from "./component/Message";
import Pokemon from "./component/Pokemon";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="This is a list of pokemon" />
        <Pokemon
          name="Charizard"
          weight="90"
          awesome="yes"
          terrifying="no"
          abilities="Blaze, Solar power, Tough claws, Drought"
        />
        <Pokemon
          name="Bulbasaur"
          weight="6.9"
          awesome="yes"
          terrifying="no"
          abilities="Overgrow, Chlorophyll"
        />

        <Pokemon
          name="Mewtwo"
          weight="122"
          awesome="yes"
          terrifying="yes"
          abilities="Pressure, Unnerve, Steadfast, Insomnia"
        />

        <Pokemon
          name="Mega beedrill"
          weight="65"
          awesome="no"
          terrifying="yes"
          abilities="Intimidate, Unnerve"
        />
        <p>
          <Message />
        </p>
      </main>
    </div>
  );
}

export default App;
