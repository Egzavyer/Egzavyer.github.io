import PropTypes from 'prop-types';

const Review = ({ id, name, reviewText, rating, onDelete }) => {
    const handleDelete = () => {
        onDelete(id);

    };

    return (
        <div className="bg-text p-6 rounded-lg shadow-lg max-w-md mx-auto my-4 font-body">
            <h3 className="text-3xl text-primary mb-3 font-display">{name}</h3>
            <p className="text-secondary mb-3">{reviewText}</p>
            <div className="flex justify-between items-center">
                <span className="bg-primary text-text text-2xl px-2.5 py-0.5 rounded font-display">{rating}</span>
                <button onClick={handleDelete} className="bg-primary text-text px-4 py-2 rounded hover:bg-red-700 transition duration-300">
                    Delete
                </button>
            </div>
        </div>
    );
};

Review.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    reviewText: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Review;