import React from 'react';
import './pokemonCardList.scss'
import PokemonCard from "../pokemonCard/pokemonCard";

const PokemonCardList = ({pokemons}) => {

    return (
        <div className="card-list">
            {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.name+Math.random()} pokemon={pokemon}/>
                )
            )}
        </div>
    );
};

export default PokemonCardList;