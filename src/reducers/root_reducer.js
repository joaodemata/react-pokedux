import { combineReducers } from 'redux-immutable';
import { uiReducer } from './ui';
import { pokemonsReducer } from './pokemons';

const rootReducer = combineReducers({
    data: pokemonsReducer,
    ui: uiReducer
})

export {rootReducer};