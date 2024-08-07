import PropTypes from 'prop-types';
import GameCard from './GameCard';
import { Link } from 'react-router-dom';

const GameGrid = ({ language, games, searchQuery, filter }) => {

    const translations = {
        noGamesFound: {
            en: "No games found",
            fr: "Aucun jeu trouvé",
        },
    };

    const sortedGames = filter.sort === "High-to-Low" ? games.sort((a, b) => b.score - a.score) : games.sort((a, b) => a.score - b.score);

    const filteredGames = sortedGames.filter((game) => {
        const matchesSearchQuery = game.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGenre = filter.genre === 'All' || game.genre.includes(filter.genre) || filter.genre === 'Tout' || game.genre.includes(filter.genre);
        const matchesPlatform = filter.platform === 'All' || game.platform.includes(filter.platform) || filter.platform === 'Tout' || game.platform.includes(filter.platform);
        return matchesSearchQuery && matchesGenre && matchesPlatform;
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {filteredGames.length > 0 ? (
                filteredGames.map((game, index) => (
                    <Link key={index} to={`/games/${game.title}`}>
                        <GameCard
                            key={index}
                            title={game.title}
                            description={game.description}
                            genre={game.genre}
                            image={game.image}
                            platform={game.platform}
                            score={game.score}
                        />
                    </Link>
                ))
            ) : (
                <p className="col-span-full text-center text-secondary">{translations.noGamesFound[language]}</p>
            )}
        </div>
    );
};

GameGrid.propTypes = {
    language: PropTypes.string.isRequired,
    games: PropTypes.array.isRequired,
    searchQuery: PropTypes.string.isRequired,
    filter: PropTypes.object.isRequired,
};

export default GameGrid;