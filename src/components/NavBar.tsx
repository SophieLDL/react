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
            <button key={pokemon.name} onClick={() => setPokemonName(pokemon.name)}>{pokemon.name}</button>
        ))
        }
    </nav>
}

export default NavBar;