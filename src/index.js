// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/header';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import ContactsPage from './pages/ContactsPage';
import SettingsPage from './pages/SettingsPage';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f8f9fa;
  }
`;

const AppContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <AppContainer>
        <Sidebar />
        <MainContent>
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/" element={<DashboardPage />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));