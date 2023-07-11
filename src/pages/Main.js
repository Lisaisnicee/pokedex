import React from 'react';
import Data from '../data/pokemons.json';
import '../styles/css/list.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Main = () => {
  const { id } = useParams();
  const pokemon = Data.find((pokemon) => pokemon.id === id);

  return <></>;
};

export default Main;
