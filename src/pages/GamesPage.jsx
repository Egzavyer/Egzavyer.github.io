import { useState, useEffect } from 'react';
import FilterSidebar from '../components/FilterSidebar'
import SearchBar from '../components/SearchBar'
import GameGrid from '../components/GameGrid'
import PropTypes from 'prop-types';

const Games = ({ language }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({ genre: '', platform: '', sort: 'High-to-Low' });
  const [games, setGames] = useState([]);

  let documentTitle = '/gamesEN.json';
  { language === 'en' ? documentTitle = '/gamesEN.json' : documentTitle = '/gamesFR.json' }

  useEffect(() => {
    fetch(documentTitle)
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error("Failed to load game data:", error));
  });

  return (
    <>
      <div className='flex min-h-screen'>
        <FilterSidebar language={language} filter={filter} setFilter={setFilter} />
        <div className='flex-1'>
          <SearchBar language={language} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <GameGrid language={language} games={games} searchQuery={searchQuery} filter={filter} />
        </div>
      </div>
    </>
  )
}

Games.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Games
