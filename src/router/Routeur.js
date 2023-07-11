import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import PokemonList from '../pages/PokemonList';
import SearchMeteo from '../pages/SearchMeteo';
import PokemonDetails from '../component/pokemons/PokemonDetails';
import NoMatch from './NoMatch';
import Navigation from '../layout/navigation';

const Routeur = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
     
          <Route path="/" element={<Main />} />
          <Route path ="/pokemonList" element ={<PokemonList/>} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path ="/searchMeteo" element ={<SearchMeteo/>} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Routeur;
