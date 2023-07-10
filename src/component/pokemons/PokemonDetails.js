import React from 'react';
import Data from '../../data/pokemons.json';
import CardDetails from '../../component/cardDetails';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
  const { id } = useParams();
  const pokemon = Data.find((pokemon) => pokemon.pokedexId === parseInt(id));

  return (
    <>
      <CardDetails
        name={pokemon.name.fr}
        namejp={pokemon.name.jp}
        category={pokemon.category}
        generation={pokemon.generation}
        picture={pokemon.sprites.regular}
        pictureshiny={pokemon.sprites.shiny}
        statshp={pokemon.stats.hp}
        statsatk={pokemon.stats.atk}
        statsdef={pokemon.stats.def}
        statsspecial={pokemon.stats.spe_atk}
        types={pokemon.types}
        resistances={pokemon.resistances}
        height={pokemon.height}
        weight={pokemon.weight}
        eggGroups={pokemon.egg_groups}
        catchRate={pokemon.catch_rate}
      />
    </>
  );
};

export default PokemonDetails;
