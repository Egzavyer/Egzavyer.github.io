import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ language, setLanguage }) {

  const nextLanguage = language === 'en' ? 'fr' : 'en';
  const buttonLabel = nextLanguage.toUpperCase();

  const translations = {
    games: {
      en: "Games",
      fr: "Jeux",
    },
    community: {
      en: "Community",
      fr: "Communauté",
    }
  };

  const changeLanguage = (lang) => {
    console.log(`Changing language to ${language}`);
    setLanguage(lang);
  };
  return (
    <nav className="bg-primary text-text p-10 font-display">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl">Indie Game Hub</Link>
        <div>
          <Link to="/games" className="text-2xl px-5 py-2 rounded hover:bg-secondary">{translations.games[language]}</Link>
          <Link to="/community" className="text-2xl px-5 py-2 rounded hover:bg-secondary">{translations.community[language]}</Link>
          <button
            onClick={() => changeLanguage(nextLanguage)}
            className="ml-4 px-5 py-2 rounded bg-secondary text-text hover:bg-opacity-80"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired
};

export default Navbar;