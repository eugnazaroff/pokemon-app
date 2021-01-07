import React from 'react';

import PokemonCard from "./components/pokemonCard/pokemonCard";
import './App.css'
import {useEffect, useState} from "react/cjs/react.production.min";

const App = () => {


    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const pokemonData =
        }


    }, [])

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
