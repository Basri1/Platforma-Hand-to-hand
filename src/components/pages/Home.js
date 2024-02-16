



import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Stilizimi i CSS-it për Home

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to the Hand to Hand Community Platform</h1>
            <p>
                Our mission is to connect individuals from different communities with the aim of mutual professional growth 
                and employment opportunities. We believe in lifting each other up and creating a network of support and 
                collaboration.
            </p>
            <div className="home-actions">
                <Link to="/community" className="home-button">Join Our Community</Link>
                <Link to="/jobs" className="home-button">Browse Jobs</Link>
            </div>
            <div className="chat-invitation">
                <p>Looking to connect with others? Join our <Link to="/chat">Chat Rooms</Link> and start networking today!</p>
            </div>
        </div>
    );
}

export default Home;
