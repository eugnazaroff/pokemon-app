import React, {useEffect, useState} from 'react';
import './App.css'
import axios from "axios";
import PokemonCardList from "./components/pokemonCardList/pokemonCardList";
import Header from "./components/header/header";

const App = () => {


    const [pokemons, setPokemons] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const pokemonData = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=21")
            setPokemons(pokemonData.data.results)
            setLoading(false)
        }
        fetchData()


    }, [])


    return (
        <div className="App">
            <Header/>
            {
                !loading ?
                    <PokemonCardList pokemons={pokemons}/>
                    :
                    <p>Loading...</p>
            }
        </div>
    );
};

export default App;
