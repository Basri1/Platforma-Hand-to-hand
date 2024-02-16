import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatComponent from './components/chat/ChatComponent'; // Sigurohuni që rruga e importit të jetë e saktë
import LanguageSelector from './components/LanguageSelector'; // Shto rrugën e duhur të importit

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import Community from './components/pages/Community';
import Jobs from './components/pages/Jobs';
import Profile from './components/pages/Profile';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import SignUp from './components/auth/SignUp';
import About from './components/pages/About';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <LanguageSelector />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/chat" element={<ChatComponent userId="user123" defaultRoom="General" />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
