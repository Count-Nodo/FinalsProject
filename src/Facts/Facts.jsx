import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Facts.css';

const useRandomHistoryFact = () => {
    const [fact, setFact] = useState('');
    const [year, setYear] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFact = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://history.muffinlabs.com/date');
                // Extract a random event and its year from the response data
                const randomIndex = Math.floor(Math.random() * response.data.data.Events.length);
                const randomEvent = response.data.data.Events[randomIndex];
                setFact(randomEvent.text);
                setYear(randomEvent.year);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchFact();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="random-fact-container"
        >
            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error">Error fetching data: {error.message}</p>}
            {fact && (
                <div className="random-fact">
                    <h3>Random History Fact:</h3>
                    <p>{fact}</p>
                    <p>Year: {year}</p>
                </div>
            )}
        </motion.div>
    );
};

export default useRandomHistoryFact;
