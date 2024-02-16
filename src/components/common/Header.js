import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Sigurohuni që të keni këtë skedar për stilizime

function Header() {
    return (
        <header className="header">
            <div className="left-links">
                <Link to="/">Home</Link>
                <Link to="/community">Community</Link>
                <Link to="/jobs">Jobs</Link>
                <Link to="/profile">Profile</Link>
            </div>
            <div className="right-links">
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
                <Link to="/logout">Logout</Link>
            </div>
        </header>
    );
}


export default Header;
