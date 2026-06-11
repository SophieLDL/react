import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard.tsx";
// import styles from "./components/PokemonCard.module.css"

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    backgroundColor: "#90ee90",
  }, {
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    backgroundColor: "#fc905d",
  },
  {
    name: "Squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    backgroundColor: "#95dffc",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    backgroundColor: "#fcd96f",
  },
  {
    name: "Mew",
    backgroundColor: "#f7a3bc",
  }
];

function App() {

  const [pokemonName, setPokemonName] = useState("Bulbasaur")

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <nav>
        {pokemonList.map((pokemon) => (
          <button key={pokemon.name} onClick={() => setPokemonName(pokemon.name)}>{pokemon.name}</button>
        ))}
      </nav>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;