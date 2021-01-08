import React, {useEffect, useState} from 'react';
import './pokemonCard.scss'
import axios from "axios";


const PokemonCard = ({pokemon}) => {

    const [pokemonData, setPokemonData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(pokemon.url)
            setPokemonData(data.data)
            setLoading(false)
        }
        fetchData()
    })

    return (
        !loading ?
            <div className="card">

                <h3 className="card__name">{pokemonData.name}</h3>
                <img src={pokemonData.sprites.other["official-artwork"].front_default} alt="portrait"
                     className="card__portrait"/>
            </div> :
            <p>Loading...</p>
    );
}

export default PokemonCard;