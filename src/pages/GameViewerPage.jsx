import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Review from '../components/Review';

const GameViewerPage = ({ language, games }) => {

  const translations = {
    developer: {
      en: "Developer: ",
      fr: "Développeur: ",
    },
    releaseDate: {
      en: "Release Date: ",
      fr: "Date de Sortie: ",
    },
    rateTheGame: {
      en: "Rate the Game",
      fr: "Évaluez le jeu",
    },
    publish: {
      en: "Publish",
      fr: "Publier",
    },
    writeYourOwnReview: {
      en: "Write your Own Review",
      fr: "Écrivez votre propre critique",
    },
    gameNotFound: {
      en: "Game not found",
      fr: "Jeu non trouvé",
    },
    accordingTo: {
      en: "According to ",
      fr: "Selon ",
    },
    reviews: {
      en: " Reviews",
      fr: " Critiques",
    },
    tellDevelopers: {
      en: "Tell the developers what you think about the game",
      fr: "Dites aux développeurs ce que vous pensez du jeu",
    }

  }


  const { title } = useParams();
  const game = games.find(game => game.title === title);

  if (!game) {
    return <div>{translations.gameNotFound[language]}</div>;
  }

  return (
    <div className="p-8 text-primary">
      <h1 className="text-8xl lg:mx-10 mb-4 font-display sm:text-6xl">{game.title}</h1>
      <div className="flex mb-4 flex-col sm:flex-row items-center justify-center font-display lg:gap-64 sm:gap-14">
        <img src={game.image} alt={game.title} className="sm:w-1/2 sm:h-auto lg:h-96 object-cover" />
        <div className="bg-text p-4 rounded-lg shadow-md lg:w-96 lg:h-96 sm:w-full sm:h-60 flex flex-col justify-center items-center gap-5">
          <h2 className="text-7xl mb-2 sm:text-5xl">SCORE</h2>
          <p className="text-5xl sm:text-3xl">{game.score} / 100</p>
          <p className="text-secondary text-3xl sm:text-xl">{translations.accordingTo[language]}{game.reviewsCount}{translations.reviews[language]}</p>
        </div>
      </div>
      <div className="flex font-body flex-col sm:flex-row lg:mx-10">
        <div className="flex-1">

          <div className="p-8 text-primary">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-display mb-4">Description</h2>
                <p className="text-secondary mb-4 w-7/12 text-2xl">{game.description}</p>
                <div className="mb-4">
                  <span className="font-display text-2xl mr-2">Genre: </span>
                  {game.genre.split(', ').map((g) => (
                    <span key={g} className="font-display mr-2 inline-block px-3 py-1 bg-text rounded-full">{g}</span>
                  ))}
                </div>
                <div className="mb-4">
                  <span className="font-display text-2xl mr-2">{translations.developer[language]} <span className="font-body text-xl mr-2">{game.developer} </span></span>
                </div>
                <div className="mb-4">
                  <span className="font-display text-2xl mr-2">{translations.releaseDate[language]} <span className="font-body text-xl mr-2">{game.releaseDate} </span></span>
                </div>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0">
                <h3 className="text-xl font-semibold mb-2">{translations.writeYourOwnReview[language]}</h3>
                <textarea className="w-full p-2 border border-text rounded mb-2" placeholder={translations.tellDevelopers[language]}></textarea>
                <div className="flex flex-row gap-3 justify-center mb-2">
                  <select className="border border-text rounded p-2">
                    <option value="">{translations.rateTheGame[language]}</option>
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <div className="flex justify-center">
                    <button className="bg-primary text-text px-4 py-2 rounded">{translations.publish[language]}</button>
                  </div>
                </div>
                <div>
                  <Review
                    name="John Doe"
                    reviewText="This game is one of the best I've played in my life. The developers did a great job. Bravo!"
                    rating="10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GameViewerPage.propTypes = {
  games: PropTypes.array.isRequired,
};
export default GameViewerPage;