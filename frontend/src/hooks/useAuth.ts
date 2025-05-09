import axios from 'axios';
import toast from 'react-hot-toast';

import {
  handleOnAuthCheck,
  handleOnLogin,
  handleOnLogout,
  handleOnSignup,
} from '../redux/slice/authSlice';

import { AppDispatch } from '../redux/store';

export const useAuth = (dispatch: AppDispatch) => {
  const signup = async (credentials: object) => {
    dispatch(handleOnSignup({ isSigningUp: true }));
    try {
      const response = await axios.post('/api/v1/auth/signup', credentials);
      dispatch(
        handleOnSignup({ user: response.data.user, isSigningUp: false }),
      );
      toast.success('Account created successfully!');
    } catch (error) {
      toast.error(error.response.data.message || 'An error occurred');
      dispatch(handleOnSignup({ isSigningUp: false, user: null }));
    }
  };

  const login = async (credentials: object) => {
    dispatch(handleOnLogin({ isLoggingIn: true }));
    try {
      const response = await axios.post('/api/v1/auth/login', credentials);
      dispatch(handleOnLogin({ isLoggingIn: false, user: response.data.user }));
      toast.success('Logged in successfully!');
    } catch (error) {
      toast.error(error.response.data.message || 'Login failed');
      dispatch(handleOnLogin({ isLoggingIn: false, user: null }));
    }
  };

  const logout = async () => {
    dispatch(handleOnLogout({ isLoggingOut: true }));
    try {
      await axios.post('api/v1/auth/logout');
      dispatch(
        handleOnLogout({
          isLoggingOut: false,
          user: null,
          isLogoutSuccess: true,
        }),
      );
      toast.success('Logged Out successfully!');
    } catch (error) {
      dispatch(handleOnLogout({ isLoggingOut: false, isLogoutSuccess: false }));
      toast.error(error.response.data.message || 'Logout failed');
    }
  };

  const authCheck = async () => {
    dispatch(handleOnAuthCheck({ isCheckingAuth: true }));
    try {
      const response = await axios.get('api/v1/auth/authCheck');
      dispatch(
        handleOnAuthCheck({ isCheckingAuth: false, user: response.data.user }),
      );
    } catch {
      dispatch(handleOnAuthCheck({ isCheckingAuth: false, user: null }));
    }
  };
  return { signup, login, logout, authCheck };
};
