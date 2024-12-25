import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AuthForm, AuthHeader } from '../components';

const TRANSLATE_LOGIN = `pages.login`;

const LoginPage: React.FC = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

  const handleOnPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );

  const handleLogin = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('handleLogin: ', { email, password });
    },
    [email, password],
  );

  return (
    <div className="hero-bg h-screen w-full">
      <AuthHeader />
      <AuthForm
        btnText={t(`${TRANSLATE_LOGIN}.title`)}
        email={email}
        emailOnChange={handleOnEmailChange}
        formSubTitle={t(`${TRANSLATE_LOGIN}.subTitle`)}
        formTitle={t(`${TRANSLATE_LOGIN}.title`)}
        handleOnSubmit={handleLogin}
        password={password}
        passwordOnChange={handleOnPasswordChange}
        routePath="/signup"
        routeTitle={t(`${TRANSLATE_LOGIN}.routeTitle`)}
      />
    </div>
  );
};

export default LoginPage;
