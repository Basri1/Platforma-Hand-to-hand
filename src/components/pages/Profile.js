import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfilePage() {
    const [userProfile, setUserProfile] = useState({ name: '', email: '', bio: '', profession: '', experience: '' });

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('YOUR_BACKEND_ENDPOINT/profile');
                setUserProfile(response.data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchUserProfile();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Update the profile information in your backend
            const response = await axios.put('YOUR_BACKEND_ENDPOINT/update_profile', userProfile);
            console.log('Profile updated successfully', response.data);
            // Add more logic as needed
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div>
            <h2>User Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={userProfile.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={userProfile.email} onChange={handleChange} required />
                </label>
                <label>
                    Biography:
                    <textarea name="bio" value={userProfile.bio} onChange={handleChange} required />
                </label>
                <label>
                    Profession:
                    <input type="text" name="profession" value={userProfile.profession} onChange={handleChange} />
                </label>
                <label>
                    Experience:
                    <textarea name="experience" value={userProfile.experience} onChange={handleChange} />
                </label>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}

export default ProfilePage;
