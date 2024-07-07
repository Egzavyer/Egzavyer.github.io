import PropTypes from 'prop-types';
const SearchBar = ({ searchQuery, setSearchQuery }) => {

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="p-4 bg-text shadow">
            <input
                type="text"
                className="w-full p-2 border border-secondary rounded"
                placeholder="Search Games..."
                value={searchQuery}
                onChange={handleChange}
            />
        </div>
    );
};

SearchBar.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;
