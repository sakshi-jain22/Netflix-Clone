import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoginPage, HomePage, SignUpPage } from './pages';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
};

export default App;
