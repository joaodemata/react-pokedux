import { SET_POKEMONS } from "./types";
import { getPokemonDetail } from "../api";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS, 
    payload
    }
)

export const getPokemonsWithDetail = (pokemons = []) => async (dispatch) => {
    const pokemonDetail = await Promise.all(pokemons.map(pokemon=> getPokemonDetail(pokemon)));

    dispatch(setPokemons(pokemonDetail));
}