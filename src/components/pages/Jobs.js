import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Jobs.css'; // Shtoni këtë nëse dëshironi të përdorni stilizim të veçantë për këtë faqe

function Jobs() {
    const [jobListings, setJobListings] = useState([]);
    const [profession, setProfession] = useState('');

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`YOUR_BACKEND_ENDPOINT/jobs?profession=${profession}`);
                setJobListings(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, [profession]);

    const handleProfessionChange = (event) => {
        setProfession(event.target.value);
    };

    return (
        <div className="jobs-container">
            <h2>Job Opportunities</h2>
            <div className="filter-section">
                <label htmlFor="profession">Filter by profession:</label>
                <select id="profession" value={profession} onChange={handleProfessionChange}>
                    <option value="">Select a Profession</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Design">Design</option>
                    <option value="Sales">Sales</option>
                    <option value="IT">IT</option>
                </select>
            </div>
            <ul className="job-listings">
                {jobListings.map((job, index) => (
                    <li key={index} className="job-listing">
                        <h3>{job.title}</h3>
                        <p>{job.description}</p>
                        <p>Location: {job.location}</p>
                        <p>Salary: {job.salary}</p>
                        <button className="apply-button">Apply Now</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Jobs;
