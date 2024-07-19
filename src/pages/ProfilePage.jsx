import PropTypes from 'prop-types';

function ProfileScreen({ language, userEvents }) {
    const translations = {
        myEvents: {
            en: "Events",
            fr: "Événements",
        },
    };

    return (
        <main className="min-h-screen bg-text p-8 font-display">

            <h1 className="text-2xl text-center mb-6" aria-label={`${translations.myEvents[language]} list`}>{translations.myEvents[language]}</h1>
            <ul className="max-w-md mx-auto" aria-live="polite">
                {userEvents.map(event => (
                    <li key={event.id} className="bg-text shadow-md rounded-lg p-4 mb-4">
                        <h2 className="text-xl font">{event.title}</h2>
                        <p className="text-secondary font-body">{event.startDate}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

ProfileScreen.propTypes = {
    language: PropTypes.string.isRequired,
    userEvents: PropTypes.array.isRequired,
};

export default ProfileScreen;