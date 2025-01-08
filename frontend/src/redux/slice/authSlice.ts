import { createSlice } from '@reduxjs/toolkit';

interface IState {
  user?: object | null;
  isSigningUp?: boolean;
  isCheckingAuth?: boolean;
  isLoggingOut?: boolean;
  isLoggingIn?: boolean;
}

const initialState: IState = {
  user: null,
  isSigningUp: false,
  isCheckingAuth: true,
  isLoggingOut: false,
  isLoggingIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleOnSignup: (state: IState, action) => {
      const { user, isSigningUp } = action.payload;

      state.isSigningUp = isSigningUp;
      if (!isSigningUp) {
        state.user = user;
      }
    },

    handleOnLogin: (state, action) => {
      const { user, isLoggingIn } = action.payload;

      state.isLoggingIn = isLoggingIn;
      if (!isLoggingIn) {
        state.user = user;
      }
    },
    handleOnLogout: (state, action) => {
      const { user, isLoggingOut, isLogoutSuccess } = action.payload;

      state.isLoggingOut = isLoggingOut;
      if (!isLoggingOut && isLogoutSuccess) {
        state.user = user;
      }
    },
    handleOnAuthCheck: (state, action) => {
      const { user, isCheckingAuth } = action.payload;

      state.isCheckingAuth = isCheckingAuth;
      if (!isCheckingAuth) {
        state.user = user;
      }
    },
  },
});

export const {
  handleOnAuthCheck,
  handleOnLogin,
  handleOnLogout,
  handleOnSignup,
} = authSlice.actions;

export default authSlice.reducer;
