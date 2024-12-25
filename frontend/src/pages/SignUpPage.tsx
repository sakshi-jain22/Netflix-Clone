import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AuthForm, AuthHeader } from '../components';

const TRANSLATE_SIGNUP = 'pages.signup';

const SignUpPage: React.FC = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('handleSignup: ', { email, username, password });
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
