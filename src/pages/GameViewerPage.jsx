import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const GameViewerPage = ({ games }) => {
  const { title } = useParams();
  const game = games.find(game => game.title === title);

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="p-8 text-primary">
      <h1 className="text-8xl mx-8 mb-4 font-display sm:text-6xl">{game.title}</h1>
      <div className="flex mb-4 flex-col sm:flex-row items-center justify-center font-display lg:gap-64 sm:gap-14">
        <img src={game.image} alt={game.title} className="sm:w-1/2 sm:h-auto lg:h-96 object-cover" />
        <div className="bg-text p-4 rounded-lg shadow-md lg:w-96 lg:h-96 sm:w-full sm:h-60 flex flex-col justify-center items-center gap-5">
          <h2 className="text-7xl mb-2 sm:text-5xl">SCORE</h2>
          <p className="text-5xl sm:text-3xl">{game.score} / 100</p>
          <p className="text-secondary text-3xl sm:text-xl">Selon {game.reviewsCount} Critiques</p>
        </div>
      </div>
      <div className="flex font-body flex-col sm:flex-row mx-8">
        <div className="flex-1">
          <p className="text-secondary mb-4">{game.description}</p>
          <div className="mb-4">
            <span className="font-semibold">Genre: </span>
            {game.genre.split(', ').map((g) => (
              <span key={g} className="mr-2 inline-block px-3 py-1 bg-text rounded-full">{g}</span>
            ))}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Développeur: </span>{game.developer}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Date de Sortie: </span>{game.releaseDate}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Écrit ta Propre Critique</h3>
        <textarea className="w-full p-2 border border-text rounded mb-2" placeholder="Dit aux développeurs ce que tu penses de leur jeu"></textarea>
        <button className="bg-primary text-text px-4 py-2 rounded">Publier</button>
      </div>
      <div className="mt-8">
        <div className="border-t border-text pt-4">
          <p className="font-semibold">John</p>
          <p className="text-secondary mb-2">Ce jeu est un des meilleurs auquel j&apos;ai joué dans toute ma vie. Les développeurs ont fait du très bon travail. Bravo!</p>
          <p className="font-bold">10</p>
        </div>
      </div>
    </div>
  );
};

GameViewerPage.propTypes = {
  games: PropTypes.array.isRequired,
};
export default GameViewerPage;