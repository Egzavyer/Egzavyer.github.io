import { useState, useEffect } from 'react';
import FilterSidebar from '../components/FilterSidebar'
import SearchBar from '../components/SearchBar'
import GameGrid from '../components/GameGrid'

const Games = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({ genre: '', platform: '' });
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('src/games.json')
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error("Failed to load game data:", error));
  }, []);

  return (
    <>
      <div className='flex'>
        <FilterSidebar filter={filter} setFilter={setFilter} />
        <div className='flex-1'>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <GameGrid games={games} searchQuery={searchQuery} filter={filter} />
        </div>
      </div>
    </>
  )
}

export default Games
