import { useEffect, useState } from 'react';

function ProfileScreen({ language, username }) {
    const translations = {
        myEvents: {
            en: "Events",
            fr: "Événements",
        },
    };

    const [userEvents, setUserEvents] = useState([]);

    useEffect(() => {
        const fetchedEvents = [
            { id: 1, title: "Game Launch Party", date: "2024-03-25" },
            { id: 2, title: "Online Tournament", date: "2023-09-22" },
        ];
        setUserEvents(fetchedEvents);
    }, []);

    return (
        <main className="min-h-screen bg-text p-8 font-display">

            <h1 className="text-2xl text-center mb-6" aria-label={`${translations.myEvents[language]} list`}>{translations.myEvents[language]}</h1>
            <ul className="max-w-md mx-auto" aria-live="polite">
                {userEvents.map(event => (
                    <li key={event.id} className="bg-text shadow-md rounded-lg p-4 mb-4">
                        <h2 className="text-xl font">{event.title}</h2>
                        <p className="text-secondary font-body">{event.date}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default ProfileScreen;