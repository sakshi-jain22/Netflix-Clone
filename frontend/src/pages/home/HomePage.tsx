import React from 'react';
import { useSelector } from 'react-redux';

import HomeScreen from './HomeScreen';
import AuthScreen from './AuthScreen';

import { RootState } from '../../redux/store';

interface IHomePage {
  icon?: boolean;
}

const HomePage: React.FC<IHomePage> = (props) => {
  console.log(props);
  const isLoggedInUser = useSelector<RootState>((state) => state.auth.user);

  return <div>{isLoggedInUser ? <HomeScreen /> : <AuthScreen />}</div>;
};

export default HomePage;
