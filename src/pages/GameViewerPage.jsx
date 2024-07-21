import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Review from '../components/Review';
import { useState } from 'react';

const GameViewerPage = ({ language, games }) => {

  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', reviewText: '', rating: 0 });
  const [formErrors, setFormErrors] = useState({
    name: '',
    reviewText: '',
    rating: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors({ name: '', reviewText: '', rating: '' });

    const errors = {
      name: newReview.name ? '' : translations.nameEmpty[language],
      reviewText: newReview.reviewText ? '' : translations.reviewTextEmpty[language],
      rating: newReview.rating ? '' : translations.ratingEmpty[language],
    };

    setFormErrors(errors);

    if (!newReview.name || !newReview.reviewText || !newReview.rating) {
      console.log('Please fill in all fields.');
      return;
    }
    addReview(newReview);
    setNewReview({ name: '', reviewText: '', rating: 0 });
  };

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

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
      fr: "Écrivez Votre Propre Critique",
    },
    gameNotFound: {
      en: "Game not Found",
      fr: "Jeu non Trouvé",
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
      en: "Tell the Developers What you Think About the Game",
      fr: "Dites aux Développeurs ce que vous Pensez du Jeu",
    },
    nameEmpty: {
      en: "Name is Required",
      fr: "Nom est Requis",
    },
    reviewTextEmpty: {
      en: "Review Text is Required",
      fr: "Le Texte de la Critique est Requis",
    },
    ratingEmpty: {
      en: "Rating is Required",
      fr: "La Note est Requise",
    },

  }


  const { title } = useParams();
  const game = games.find(game => game.title === title);

  if (!game) {
    return <div>{translations.gameNotFound[language]}</div>;
  }

  return (
    <div className="p-8 text-primary min-h-screen">
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
                <form onSubmit={handleSubmit}>
                  <input className='w-full' type="text" name="name" placeholder="Your Name" value={newReview.name} onChange={handleInputChange} />
                  {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}

                  <textarea name="reviewText" className="w-full p-2 border border-text rounded mb-2" placeholder={translations.tellDevelopers[language]} value={newReview.reviewText} onChange={handleInputChange}></textarea>
                  {formErrors.reviewText && <p className="text-red-500">{formErrors.reviewText}</p>}

                  <div className="flex flex-row gap-3 justify-center mb-2">
                    <select
                      className="border border-text rounded p-2"
                      name="rating"
                      value={newReview.rating}
                      onChange={handleInputChange}
                    >
                      <option value="">{translations.rateTheGame[language]}</option>
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    {formErrors.rating && <p className="text-red-500">{formErrors.rating}</p>}

                    <div className="flex justify-center">
                      <button type="submit" className="bg-primary text-text px-4 py-2 rounded">{translations.publish[language]}</button>
                    </div>
                  </div>
                </form>
                {reviews.map((review, index) => (
                  <Review key={index} name={review.name} reviewText={review.reviewText} rating={review.rating} />
                ))}
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
    </div >
  );
};

GameViewerPage.propTypes = {
  language: PropTypes.string.isRequired,
  games: PropTypes.array.isRequired,
};
export default GameViewerPage;