// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Import your page components
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SeatSelectionPage from './pages/SeatSelectionPage';
import SnackOrderingPage from './pages/SnackOrderingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import ProfilePage from './pages/ProfilePage';
// ... import other pages as you create them

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container">
          {/* Routes define all the different pages */}
          <Routes>
            {/* 'path' is the URL, 'element' is the component to render */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/select-seats/:showtimeId" element={<SeatSelectionPage />} />
            <Route path="/order-snacks" element={<SnackOrderingPage />} />
            <Route path="/confirmation/:bookingId" element={<ConfirmationPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;