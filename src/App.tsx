import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GridItem } from "@chakra-ui/react";

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

const App: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const checkTokenValidity = () => {
      if (!token) {
        setLoggedIn(false);
        return;
      }
      setLoggedIn(true);
    };

    checkTokenValidity(); // Initial check on component mount
    setLoading(false);

    const interval = setInterval(checkTokenValidity, 60000); // Check every minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleLoginSuccess = (token: string) => {
    localStorage.setItem('authToken', token);
    setLoggedIn(true);
  };

  if (loading) {
    return <div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>;
  }

  return (
  
      <Router>
        {isLoggedIn && <NavBar />}
        <GridItem area="main">
          <Routes>
            <Route path="/login" element={<HomePage/>} />
            {/* <Route path="/" element={isLoggedIn ? <ProjectTable /> : <Navigate to="/login" replace />} /> */}
          </Routes>
        </GridItem>
      </Router>
   
  );
};

export default App;
