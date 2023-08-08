import axios from 'axios';

const getPokemons = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(_res => _res.data.results)
    .catch(_error => console.log(_error))
}

export {getPokemons}