import { useState } from 'react';

function Login({ language, setIsAuthenticated, setUsername }) {
    const translations = {
        username: {
            en: "Username:",
            fr: "Nom d'Utilisateur:",
        },
        password: {
            en: "Password:",
            fr: "Mot de Passe:",
        },
        login: {
            en: "Login",
            fr: "Connexion",
        }
    };

    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        if (!credentials.username) {
            formIsValid = false;
            errors['username'] = 'Username cannot be empty';
        }

        if (!credentials.password) {
            formIsValid = false;
            errors['password'] = 'Password cannot be empty';
        }

        setErrors(errors);
        return formIsValid;
    };

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Login Successful');
            setIsAuthenticated(true);
            setUsername(credentials.username);
            credentials.username = '';
            credentials.password = '';
            // Here you would typically redirect the user or clear the form
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto my-8 font-body">
            <div className="mb-4">
                <label className="block text-primary text-xl font-display mb-2">{translations.username[language]}</label>
                <input type="text" name="username" value={credentials.username} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline" />
                {errors.username && <div className="text-red-500 text-xs italic">{errors.username}</div>}
            </div>
            <div className="mb-6">
                <label className="block text-primary text-xl font-display mb-2">{translations.password[language]}</label>
                <input type="password" name="password" value={credentials.password} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                {errors.password && <div className="text-red-500 text-xs italic">{errors.password}</div>}
            </div>
            <button type="submit" className="bg-primary hover:bg-blue-700 text-text text-lg w-full font-body py-2 px-4 rounded focus:outline-none focus:shadow-outline">{translations.login[language]}</button>
        </form>
    );
}

export default Login;