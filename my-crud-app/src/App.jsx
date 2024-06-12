import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pessoas from './pages/Pessoas';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pessoas" element={<Pessoas />} />
            </Routes>
        </Router>
    );
};

export default App;
