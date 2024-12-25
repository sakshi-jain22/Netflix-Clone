import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer } from './components';
import { LoginPage, HomePage, SignUpPage } from './pages';

import './i18n/i18next';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
