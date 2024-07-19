import PropTypes from 'prop-types';
const SearchBar = ({ language, searchQuery, setSearchQuery }) => {

    const translations = {
        searchGames: {
            en: "Search Games...",
            fr: "Rechercher des Jeux...",
        },
    };

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="p-4 bg-text shadow">
            <input
                type="text"
                className="w-full p-2 border border-secondary rounded"
                placeholder={translations.searchGames[language]}
                value={searchQuery}
                onChange={handleChange}
            />
        </div>
    );
};

SearchBar.propTypes = {
    language: PropTypes.string.isRequired,
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;
