

import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: '',
        fullName: ''
    });

    const { email, password, username, fullName } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/signup', formData);
            console.log('Registration successful', response.data);
            // Additional logic after successful registration
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Full Name:
                    <input type="text" name="fullName" value={fullName} onChange={handleChange} required />
                </label>
                <label>
                    Username:
                    <input type="text" name="username" value={username} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={email} onChange={handleChange} required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={handleChange} required />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
