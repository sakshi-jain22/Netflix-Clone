import React from 'react';
import { useDispatch } from 'react-redux';

import { useAuth } from '../../hooks/useAuth';

import { AppDispatch } from '../../redux/store';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { logout } = useAuth(dispatch);

  return (
    <div>
      HomeScreen <button onClick={logout}>Logout</button>
    </div>
  );
};

export default HomeScreen;
