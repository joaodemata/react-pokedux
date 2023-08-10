import { PokemonCard } from "./pokemos_card";
import './pokemon_list.css';

const PokemonList = ({pokemons}) =>{

    return (
        <div className="PokemonList">
            {pokemons.map(_pokemon => {
                return <PokemonCard key={_pokemon.id} id={_pokemon.id} favorite={_pokemon.favorite} name={_pokemon.name} image={_pokemon.sprites.front_default} types={_pokemon.types.map(_pokemonType => _pokemonType.type.name).join(', ')}/>
            })}
        </div>
    )
}

export {PokemonList};