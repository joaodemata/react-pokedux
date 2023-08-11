import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetail, getPokemons } from "../api";
import { setLoading } from "./ui.slice";

const initialState = {
    pokemons: []
}
// Estos es más como un service/tipo de accion dinamico que dispara cierto tipo de acciones dentro de el
export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, {dispatch}) => {
        // dispatch loader 
        dispatch(setLoading(true));
        // fetch
        const pokemonsRes =  await getPokemons();
        // const pokemonDetail = await Promise.all(pokemonsRes.map(pokemon=> getPokemonDetail(pokemon)));
        const pokemonDetail = await Promise.all(pokemonsRes.map(pokemon=> getPokemonDetail(pokemon)));

        dispatch(setPokemons(pokemonDetail));
        // dispatch loader
        dispatch(setLoading(false));
    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload
        },
        setFavorite: (state, action) => {

            const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemonId
            })

            if(currentPokemonIndex >= 0){
                const isFavorite = state.pokemons[currentPokemonIndex].favorite;
                state.pokemons[currentPokemonIndex].favorite = !isFavorite;
            }             
        }
    }
});

export const {setPokemons, setFavorite} = dataSlice.actions;

export default dataSlice.reducer;