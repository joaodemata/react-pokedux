import { useEffect } from 'react';
/* import { connect } from 'react-redux';*/
import { getPokemonsWithDetail, setPokemons } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'antd';
import { Searcher } from './components/search';
import { PokemonList } from './components/pokemon_list';
import { getPokemonDetail, getPokemons } from './api';
import logo from './statics/logo.svg';
import './App.css';

function App(/* {pokemons, setPokemons} */) {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch()

  useEffect(()=> {

    const pokemons = async () => {
    const pokemonsRes =  await getPokemons();
    // const pokemonDetail = await Promise.all(pokemonsRes.map(pokemon=> getPokemonDetail(pokemon)));

    // dispatch(setPokemons(pokemonDetail));
      dispatch(getPokemonsWithDetail(pokemonsRes));
    } 

    pokemons()

  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
        <PokemonList pokemons={pokemons}/>
    </div>
  );
}

/* const mapStateToProps = (state =>( {
  pokemons: state.pokemons,

})); 

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) =>  dispatch(setPokemonsActions(value)) 
}); */

/* export default connect(mapStateToProps, mapDispatchToProps)(App);
 */

export default App;