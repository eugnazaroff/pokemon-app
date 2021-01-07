import React from 'react';
import PokemonCard from "./components/pokemonCard/pokemonCard";
import './App.css'

const App = () => {

    const testPoke = {
        name: "Billy Eilish",
        portraitUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
    }

  return (
      <div>
        <PokemonCard pokemon={testPoke}/>
      </div>
  );
};

export default App;
