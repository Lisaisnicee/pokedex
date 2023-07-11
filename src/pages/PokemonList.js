import React from 'react';
import ListCards from '../component/listeCards';
import Data from '../data/pokemons.json';
import '../styles/css/list.css';

import { useParams } from 'react-router-dom';

const Main = () => {
  
    const { id } = useParams();
  const pokemon = Data.find((pokemon) => pokemon.id === id);

  return (
    <>
      <div className="pokedex">
        <h1>Liste Pokémon</h1>
        <div className="cards-container">
          {Data.map((pokemon) => (
            <ListCards
              key={pokemon.id}
              id={pokemon.pokedexId}
              name={pokemon.name.fr}
              namejp={pokemon.name.jp}
              category={pokemon.category}
              picture={pokemon.sprites.regular}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
