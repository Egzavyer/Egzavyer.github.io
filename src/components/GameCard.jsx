import PropTypes from 'prop-types';
import { getPlatform } from '../utils/getPlatform';

const GameCard = ({ title, description, genre, image, platform, score }) => {

    const platformLogo = getPlatform(platform);
    return (
        <div className="bg-text rounded-lg shadow-md overflow-hidden relative">
            <div className="absolute top-0 left-0 p-1 bg-primary text-text text-sm font-semibold rounded-br-lg">{genre}</div>
            <div className="absolute top-0 right-0 p-1 bg-secondary text-white text-sm font-semibold rounded-bl-lg">{score}</div>
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4 h-44">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-secondary">{description}</p>
            </div>
            <img src={platformLogo} alt={platform} className="absolute bottom-0 right-0 m-2 w-5 h-5 object-contain" />
        </div>
    );
};

GameCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    score: PropTypes.string.isRequired,
};

export default GameCard;