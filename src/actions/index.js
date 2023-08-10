import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";
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

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
});

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload
})