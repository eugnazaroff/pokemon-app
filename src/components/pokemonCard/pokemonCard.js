import React from 'react';
import './pokemonCard.scss'
import {useEffect} from "react/cjs/react.production.min";

const PokemonCard = ({pokemon}) => {

    return (
        <div className="card">
            <h3 className="card__name">{pokemon.name}</h3>
            <img src={pokemon.portraitUrl} alt="portrait" className="card__portrait"/>
        </div>
    );
};

export default PokemonCard;