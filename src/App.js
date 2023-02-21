import React, { useState, useEffect } from 'react';

import MainForm from './components/form/MainForm.js';
import AuthForm from './components/auth/AuthForm.js';
import AuthContext from './store/auth-context';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
            }}
        >
            <main>
                {!isLoggedIn && <AuthForm onLogin={loginHandler} />}
                {isLoggedIn && <MainForm />}
            </main>
        </AuthContext.Provider>
    );
}

export default App;
