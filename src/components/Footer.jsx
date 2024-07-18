import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Footer({ language }) {
    const translations = {
        about: {
            en: "About",
            fr: "À propos"
        },
        contact: {
            en: "Contact Us",
            fr: "Nous contacter"
        },
        rights: {
            en: "© 2024 Indie Game Hub™. All Rights Reserved.",
            fr: "© 2024 Indie Game Hub™. Tous droits réservés."
        }
    };

    return (
        <footer className="bg-primary shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-text">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="../src/assets/logo.svg" className="h-8" alt="Logo" />
                        <span className="self-center text-3xl whitespace-nowrap font-display">Indie Game Hub</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-md font-medium sm:mb-0 font-body">
                        <li>
                            <Link to="/faq" className="hover:underline me-4 md:me-6"> <FontAwesomeIcon icon={faQuestionCircle} /> FAQ</Link>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">
                                <FontAwesomeIcon icon={faEnvelope} /> {translations.contact[language]}
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-secondary lg:my-8" />
                <span className="block text-sm sm:text-center font-body">
                    <a href="#" className="hover:underline">{translations.rights[language]}</a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;