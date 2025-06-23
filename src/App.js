import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import StatsPage from './pages/StatsPage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stats" element={<StatsPage />} />
    </Routes>
  </Router>
);

export default App;
