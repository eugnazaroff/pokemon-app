import React, {useEffect, useState} from 'react';
import './App.css'
import axios from "axios";
import PokemonCardList from "./components/pokemonCardList/pokemonCardList";

const App = () => {


    const [pokemons, setPokemons] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const pokemonData = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=21")
            setPokemons(pokemonData.data.results)
        }
        fetchData()

    }, [])


    return (
        <div>
            {
                pokemons.length ?
                    <PokemonCardList pokemons={pokemons}/>
                    :
                    <p>Loading...</p>
            }
        </div>
    );
};

export default App;
