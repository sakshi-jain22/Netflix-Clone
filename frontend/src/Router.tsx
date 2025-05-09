import React, { useEffect } from 'react';
import { Loader } from 'lucide-react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from './redux/store';
import { useAuth } from './hooks/useAuth';

import { LoginPage, HomePage, SignUpPage } from './pages';

const Router: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isCheckingAuth } = useSelector<RootState>(
    (state) => state.auth,
  );
  const { authCheck } = useAuth(dispatch);

  console.warn('user: ', { user, isCheckingAuth });

  useEffect(() => {
    authCheck();
  }, []);

  if (isCheckingAuth) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-red-600 size-10" />
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={!user ? <LoginPage /> : <Navigate to={'/'} />}
      />
      <Route
        path="/signup"
        element={!user ? <SignUpPage /> : <Navigate to={'/'} />}
      />
    </Routes>
  );
};

export default Router;
