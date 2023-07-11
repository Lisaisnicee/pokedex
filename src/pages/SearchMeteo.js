import React from 'react';
import Data from '../data/pokemons.json';

import SearchBar from '../component/searchBar';
import { useParams } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div>
        <SearchBar />
      </div>
    </>
  );
};

export default Main;
