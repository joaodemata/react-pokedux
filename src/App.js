import { useEffect } from 'react';
/* import { connect } from 'react-redux';*/
import { getPokemonsWithDetail, setLoading, /* setPokemons */ } from './actions';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd';
import { Searcher } from './components/search';
import { PokemonList } from './components/pokemon_list';
import { /* getPokemonDetail,  */getPokemons } from './api';
import logo from './statics/logo.svg';
import './App.css';

function App(/* {pokemons, setPokemons} */) {
  // El useSelector realiza comparaciones estrictas, en el caso de objetos y arrays realiza comparacion de referencias. Como utilizamos inmmutabilidad la referencia siempre son distintas
  const pokemons = useSelector((state) => state.getIn(['data', 'pokemons']), shallowEqual).toJS();

  const loading = useSelector((state) => state.getIn(['ui', 'loading']));

  const dispatch = useDispatch()

  useEffect(()=> {

    const pokemons = async () => {
      dispatch(setLoading(true));

    const pokemonsRes =  await getPokemons();
    // const pokemonDetail = await Promise.all(pokemonsRes.map(pokemon=> getPokemonDetail(pokemon)));

    // dispatch(setPokemons(pokemonDetail));
      dispatch(getPokemonsWithDetail(pokemonsRes));
      dispatch(setLoading(false));
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

     {loading && <Col offset={12}>
        <Spin spinning size="large"/>
      </Col>}
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