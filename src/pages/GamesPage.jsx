import FilterSidebar from '../components/FilterSidebar'
import SearchBar from '../components/SearchBar'
import GameGrid from '../components/GameGrid'

function Games() {

  return (
    <>
      <div className='flex'>
        <FilterSidebar />
        <div className='flex-1'>
          <SearchBar />
          <GameGrid />
        </div>
      </div>
    </>
  )
}

export default Games
