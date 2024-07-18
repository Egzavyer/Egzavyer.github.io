import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Navbar({ language, setLanguage, isAuthenticated, setIsAuthenticated, username, setUsername }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

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
    },
    login: {
      en: "Log In",
      fr: "Connexion",
    },
    signup: {
      en: "Sign Up",
      fr: "Inscription",
    },
    viewProfile: {
      en: "View Profile",
      fr: "Voir Profil",
    },
    logout: {
      en: "Log Out",
      fr: "Déconnexion",
    }
  };

  const changeLanguage = (lang) => {
    console.log(`Changing language to ${language}`);
    setLanguage(lang);
  };

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
  };

  return (
    <nav className="bg-primary text-text p-10 font-display">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl">Indie Game Hub</Link>
        <div>
          <Link to="/games" className="text-2xl px-5 py-2 rounded hover:bg-secondary">{translations.games[language]}</Link>
          <Link to="/community" className="text-2xl px-5 py-2 rounded hover:bg-secondary">{translations.community[language]}</Link>

          <button onClick={toggleMenu} className="ml-4 text-2xl px-5 py-2 rounded hover:bg-secondary">
            Profile
          </button>
          {isMenuVisible && (
            <div className="absolute z-10 right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
              {!isAuthenticated ? (
                <>
                  <Link to="/login" className="block px-4 py-2 text-sm text-secondary hover:bg-text">{translations.login[language]}</Link>
                  <Link to="/signup" className="block px-4 py-2 text-sm text-secondary hover:bg-text">{translations.signup[language]}</Link>
                </>
              ) : (
                <>
                  <p className="font-body block px-4 py-2 text-sm text-secondary">Welcome, {username}</p>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-secondary hover:bg-text">{translations.viewProfile[language]}</Link>
                  <Link to="/logout" className="block px-4 py-2 text-sm text-secondary hover:bg-text" onClick={() => handleLogout()}>{translations.logout[language]}</Link>
                </>
              )}
            </div>
          )}
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