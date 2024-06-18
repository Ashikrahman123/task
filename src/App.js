// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header.jsx';
import DashboardPage from './pages/DashboardPage';
import ContactsPage from './pages/ContactsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;