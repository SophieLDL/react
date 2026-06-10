import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard.tsx";

const [pokemonName, setPokemonName] = useState("bulbasaur")

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
  }
];

const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

if (pokemon == null) {
  throw new Error("Invalid pokemon name");
}

function App() {
  return (
    <div>
      <button type="button" onClick={() => setPokemonName("Bulbasaur")}>Bulbi</button>
      <button type="button" onClick={() => setPokemonName("Mew")}>Mew</button>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;