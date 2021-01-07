import React, {useEffect, useState} from 'react';
import './App.css'
import axios from "axios";

const App = () => {


    const [pokemons, setPokemons] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const pokemonData = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")
            console.log(pokemonData.data.results)
            setPokemons(pokemonData.data.results)
        }
        fetchData()

    }, [])


    return (
        <div>
            {
                pokemons.length ?
                    pokemons.map((pokemon) => (
                        <p>{pokemon.name}</p>
                    ))
                    :
                    <p>Loading...</p>
            }
        </div>
    );
};

export default App;
