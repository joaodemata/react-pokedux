import { PokemonCard } from "./pokemos_card";
import './pokemon_list.css';

const PokemonList = ({pokemons}) =>{

    return (
        <div className="PokemonList">
            {pokemons.map(_pokemon => {
                return <PokemonCard key={_pokemon.name} name={_pokemon.name}/>
            })}
        </div>
    )
}

export {PokemonList};