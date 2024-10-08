import  { useState } from 'react';
import Login from './Login/Login';
import AuthButton from './AuthButton/AuthButton';
// import AuthButton from './AuthButton'; // Import your AuthButton component
// import Login from './Login'; // Import your Login component

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLoginStatusChange = (status) => {
        setIsAuthenticated(status);
    };

    return (
        <div>
            <AuthButton onLogin={handleLoginStatusChange} />
            {/* Render Login component only when needed */}
            {!isAuthenticated && <Login onLogin={handleLoginStatusChange} />}
        </div>
    );
};

export default App;
