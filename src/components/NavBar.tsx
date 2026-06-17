import { Link } from "react-router";

interface Pokemon {
    name: string;
    imgSrc?: string;
}

interface NavBarProps {
    setPokemonName: (name: string) => void;
    pokemonList: Pokemon[];
    pokemonName: string;
}

function NavBar({ setPokemonName, pokemonList, pokemonName }: NavBarProps) {

    { pokemonName === "Pikachu" && alert("Pika Pikachu !!!") }

    return <nav>
        {pokemonList.map((pokemon) => (
            // <button key={pokemon.name} onClick={() => setPokemonName(pokemon.name)}>{pokemon.name}</button>
            <Link to={`/${pokemon.name}`}>{pokemon.name}</Link>
        ))
        }
    </nav>
}

export default NavBar;