import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ setToken }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setToken('');
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
}

export default Logout;
