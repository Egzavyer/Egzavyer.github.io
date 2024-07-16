import PropTypes from 'prop-types';

const FilterSidebar = ({ language, filter, setFilter }) => {

    const translations = {
        filter: {
            en: "Filter Search",
            fr: "Filtrer la Recherche",
        },
        platform: {
            en: "Platform",
            fr: "Plateforme",
        },
        genre: {
            en: "Genre",
            fr: "Genre",
        },
        score: {
            en: "Score",
            fr: "Score",
        },
        highToLow: {
            en: "High-to-Low",
            fr: "Élevé à Faible",
        },
        lowToHigh: {
            en: "Low-to-High",
            fr: "Faible à Élevé",
        },
        all: {
            en: "All",
            fr: "Tout",
        },
        action: {
            en: "Action",
            fr: "Action",
        },
        adventure: {
            en: "Adventure",
            fr: "Aventure",
        },
        casual: {
            en: "Casual",
            fr: "Décontracté",
        },
    };

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
            <h2 className="text-xl  font-bold mb-4">{translations.filter[language]}</h2>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">{translations.platform[language]}</label>
                <select className="w-full p-2 border border-text rounded" value={filter.platform} onChange={handlePlatformChange}>
                    <option>{translations.all[language]}</option>
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
                    <option>{translations.all[language]}</option>
                    <option>{translations.action[language]}</option>
                    <option>{translations.adventure[language]}</option>
                    <option>{translations.casual[language]}</option>
                    <option>Platformer</option>
                    <option>Sim</option>
                    <option>Puzzle</option>
                    <option>CO-OP</option>
                    <option>Arcade</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Score</label>
                <select className="w-full p-2 border border-text rounded" value={filter.sort} onChange={handleSortChange}>
                    <option>{translations.highToLow[language]}</option>
                    <option>{translations.lowToHigh[language]}</option>
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
