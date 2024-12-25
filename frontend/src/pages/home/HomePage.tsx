import React from 'react';

import HomeScreen from './HomeScreen';
import AuthScreen from './AuthScreen';

interface IHomePage {
  icon?: boolean;
}

const HomePage: React.FC<IHomePage> = (props) => {
  console.log(props);
  const isLoggedInUser = false;

  return <div>{isLoggedInUser ? <HomeScreen /> : <AuthScreen />}</div>;
};

export default HomePage;
