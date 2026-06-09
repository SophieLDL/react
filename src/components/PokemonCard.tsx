interface PokemonProps {
    pokemon: {
        name: string;
        imgSrc?: string;
    }
}

function PokemonCard({ pokemon }: PokemonProps) {
    return (
        <>
            <figure>{pokemon.imgSrc !== undefined ? (
                <img src={pokemon.imgSrc}
                    alt={pokemon.name}
                />
            ) : (
                <p>???</p>
            )}

            </figure>
            <figcaption> {pokemon.name} </figcaption>
        </>
    );
}

export default PokemonCard;