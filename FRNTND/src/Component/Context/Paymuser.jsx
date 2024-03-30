import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const Usercontext1 = createContext({});

export const Paymuser = ({ children }) => {
  const [userm, setUserm] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/Getpaymonth'); // Use correct endpoint
        setUserm(response.data); // Use response.data to set userm state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Usercontext1.Provider value={{ userm, setUserm }}>
      {children}
    </Usercontext1.Provider>
  );
};
