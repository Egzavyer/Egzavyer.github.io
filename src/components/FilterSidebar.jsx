import PropTypes from 'prop-types';

const FilterSidebar = ({ filter, setFilter }) => {

    const handleGenreChange = (e) => {
        setFilter({ ...filter, genre: e.target.value });
    };

    const handlePlatformChange = (e) => {
        setFilter({ ...filter, platform: e.target.value });
    };

    const handleSortChange = (e) => {
        setFilter({ ...filter, sort: e.target.value });
    };

    return (
        <div className="w-64 p-4 bg-text text-primary">
            <h2 className="text-xl  font-bold mb-4">Filter Search</h2>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Platform</label>
                <select className="w-full p-2 border border-text rounded" value={filter.platform} onChange={handlePlatformChange}>
                    <option>All</option>
                    <option>Windows</option>
                    <option>MacOS</option>
                    <option>Switch</option>
                    <option>Playstation</option>
                    <option>Xbox</option>
                    <option>Web</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Genre</label>
                <select className="w-full p-2 border border-text rounded" value={filter.genre} onChange={handleGenreChange}>
                    <option>All</option>
                    <option>Action</option>
                    <option>Adventure</option>
                    <option>Casual</option>
                    <option>Platformer</option>
                    <option>Sim</option>
                    <option>Puzzle</option>
                    <option>CO-OP</option>
                    <option>Ardcade</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Score</label>
                <select className="w-full p-2 border border-text rounded" value={filter.sort} onChange={handleSortChange}>
                    <option>High-to-Low</option>
                    <option>Low-to-High</option>
                </select>
            </div>
        </div>
    );
};

FilterSidebar.propTypes = {
    filter: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired
};

export default FilterSidebar;
