import { useParams } from 'react-router';
import classes from './PokemonCard.module.css'

interface PokemonProps {
    pokemon: {
        name: string;
        imgSrc?: string;
        backgroundColor?: string;
    }
}

function PokemonCard({ pokemon }: PokemonProps) {
    const { pokemonName } = useParams();
    console.log(useParams)
    return (
        <>
            <figure className={classes.card} style={{ backgroundColor: pokemon.backgroundColor }}>{pokemon.imgSrc !== undefined ? (
                <img className={classes.cardImg} src={pokemon.imgSrc}
                    alt={pokemon.name}
                />
            ) : (
                <p>???</p>
            )}
                <figcaption> {pokemon.name} </figcaption>
            </figure >

        </>
    );
}

export default PokemonCard;