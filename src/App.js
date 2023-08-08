import { useEffect, useState } from 'react';
import { Col } from 'antd';
import { Searcher } from './components/search';
import { PokemonList } from './components/pokemon_list';
import { getPokemons } from './api';
import logo from './statics/logo.svg';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(()=> {

    const pokemons = async () => {
    const pokemonsRes =  await getPokemons();
    setPokemons(pokemonsRes);
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

export default App;
