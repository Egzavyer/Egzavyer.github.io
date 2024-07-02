import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const EventCard = ({ imagePath, name, description, link }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="w-60 h-80 bg-text rounded-lg shadow-lg border-2 border-primary">
                <img src={imagePath} alt="event" className="w-full h-40 object-cover rounded-t-lg" />
                <div className="p-4 text-primary font-body">
                    <h1 className="flex text-xl justify-center">{name}</h1>
                    <p className="text-sm ">{description}</p>
                    <Link to={link} className="text-primary underline">Click to Learn More</Link>
                </div>
            </div>
        </div>
    );
}

EventCard.propTypes = {
    imagePath: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default EventCard;