import { useState, useEffect } from 'react';
import GameCard from './GameCard';

const GameGrid = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('src/games.json')
            .then(response => response.json())
            .then(data => setGames(data))
            .catch(error => console.error("Failed to load game data:", error));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {games.map(game => (
                <GameCard key={game.title} {...game} />
            ))}
        </div>
    );
};

export default GameGrid;