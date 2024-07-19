import { useState } from 'react';
import PropTypes from 'prop-types';

function Signup({ language, setIsAuthenticated, setUsername }) {

    const translations = {
        username: {
            en: "Username:",
            fr: "Nom d'Utilisateur:",
        },
        email: {
            en: "Email:",
            fr: "Courriel:",
        },
        password: {
            en: "Password:",
            fr: "Mot de Passe:",
        },
        signup: {
            en: "Signup",
            fr: "Inscription",
        }
    };

    const [userDetails, setUserDetails] = useState({
        username: '',
        password: '',
        email: '',
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        if (!userDetails.username) {
            formIsValid = false;
            errors['username'] = 'Username cannot be empty';
        }

        if (!userDetails.email) {
            formIsValid = false;
            errors['email'] = 'Email cannot be empty';
        } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
            formIsValid = false;
            errors['email'] = 'Email is not valid';
        }

        if (!userDetails.password) {
            formIsValid = false;
            errors['password'] = 'Password cannot be empty';
        }

        setErrors(errors);
        return formIsValid;
    };

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Signup Successful');
            setIsAuthenticated(true);
            setUsername(userDetails.username);
            userDetails.username = '';
            userDetails.password = '';
            userDetails.email = '';
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 font-body">
            <div className="mb-4">
                <label className="block text-primary text-xl font-display mb-2">{translations.username[language]}</label>
                <input type="text" name="username" value={userDetails.username} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline" />
                {errors.username && <div className="text-red-500 text-xs italic">{errors.username}</div>}
            </div>
            <div className="mb-4">
                <label className="block text-primary text-xl font-display mb-2">{translations.email[language]}</label>
                <input type="email" name="email" value={userDetails.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline" />
                {errors.email && <div className="text-red-500 text-xs italic">{errors.email}</div>}
            </div>
            <div className="mb-6">
                <label className="block text-primary text-xl font-display mb-2">{translations.password[language]}</label>
                <input type="password" name="password" value={userDetails.password} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                {errors.password && <div className="text-red-500 text-xs italic">{errors.password}</div>}
            </div>
            <button type="submit" className="bg-primary w-full hover:bg-blue-700 text-text text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{translations.signup[language]}</button>
        </form>
    );
}

Signup.propTypes = {
    language: PropTypes.string.isRequired,
    setIsAuthenticated: PropTypes.func.isRequired,
    setUsername: PropTypes.func.isRequired,
};

export default Signup;