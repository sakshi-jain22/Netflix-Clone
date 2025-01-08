import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { AuthForm, AuthHeader } from '../components';

import { useAuth } from '../hooks/useAuth';

import { AppDispatch } from '../redux/store';

const TRANSLATE_SIGNUP = 'pages.signup';

const SignUpPage: React.FC = () => {
  const { t } = useTranslation();
  const { searchParams } = new URL(document.location);

  const emailValue = searchParams.get('email');
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState(emailValue || '');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signup } = useAuth(dispatch);

  const handleSignup = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      signup({ email, username, password });
    },
    [email, username, password],
  );

  const handleOnEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

  const handleOnUsernameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    },
    [],
  );

  const handleOnPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );

  return (
    <div className="hero-bg h-screen w-full">
      <AuthHeader />
      <AuthForm
        btnText={t(`${TRANSLATE_SIGNUP}.title`)}
        email={email}
        emailOnChange={handleOnEmailChange}
        formSubTitle={t(`${TRANSLATE_SIGNUP}.subTitle`)}
        formTitle={t(`${TRANSLATE_SIGNUP}.title`)}
        handleOnSubmit={handleSignup}
        password={password}
        passwordOnChange={handleOnPasswordChange}
        routePath="/login"
        routeTitle={t(`${TRANSLATE_SIGNUP}.routeTitle`)}
        showUsername
        username={username}
        usernameOnChange={handleOnUsernameChange}
      />
    </div>
  );
};

export default SignUpPage;
