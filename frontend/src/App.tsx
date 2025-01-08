import React from 'react';
import { Toaster } from 'react-hot-toast';

import Router from './Router';
import StoreProvider from './StoreProvider';
import { Footer } from './components';

import './i18n/i18next';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router />
      <Footer />
      <Toaster />
    </StoreProvider>
  );
};

export default App;
