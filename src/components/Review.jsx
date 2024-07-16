const Review = ({ name, reviewText, rating }) => {
    return (
        <div className="bg-text p-6 rounded-lg shadow-lg max-w-md mx-auto my-4 font-body">
            <h3 className="text-3xl text-primary mb-3 font-display">{name}</h3>
            <p className="text-secondary mb-3">{reviewText}</p>
            <div className="flex justify-end items-center ">
                <span className="bg-primary text-text text-2xl mr-2 px-2.5 py-0.5 rounded font-display">{rating}</span>
            </div>
        </div>
    );
};

export default Review;