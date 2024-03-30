import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const Usercontext2 = createContext({});

export const Payyuser = ({ children }) => {

    const [usery, setUsery] = useState([]);

    useEffect(() => {
        const fetchData1 = async () => {
            try {
                const response = await axios.get('/Getpayyear'); // Use correct endpoint
                setUsery(response.data); // Use response.data to set userm state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData1();
    }, []);

    return (
        <Usercontext2.Provider value={{ usery, setUsery }}>
            {children}
        </Usercontext2.Provider>
    )
}
