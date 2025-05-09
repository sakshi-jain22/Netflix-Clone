import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface IAuthForm {
  btnText: string;
  email: string;
  emailOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formSubTitle: string;
  formTitle: string;
  handleOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  password: string;
  passwordOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  routePath: string;
  routeTitle: string;
  showUsername?: boolean;
  username?: string;
  usernameOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TRANSLATE_AUTH = `components.authForm`;

const AuthForm: React.FC<IAuthForm> = (props) => {
  const {
    btnText,
    email,
    emailOnChange,
    formSubTitle,
    formTitle,
    handleOnSubmit,
    password,
    passwordOnChange,
    routePath,
    routeTitle,
    showUsername = false,
    username = '',
    usernameOnChange = () => {},
  } = props;
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center mt-20 mx-3">
      <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
        <div className="text-center text-white text-2xl font-bold mb-4">
          {formTitle}
        </div>

        <form action="" className="space-y-4" onSubmit={handleOnSubmit}>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium block text-gray-300 mb-3">
              {t(`${TRANSLATE_AUTH}.email`)}
            </label>
            <input
              className="w-full px-3 py-4 border border-gray-700 rounded-md text-white bg-transparent focus:outline-none focus:ring"
              id="email"
              placeholder="youremail@example.com"
              type="email"
              value={email}
              onChange={emailOnChange}
            />
          </div>

          {showUsername && (
            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium block text-gray-300 mb-3">
                {t(`${TRANSLATE_AUTH}.username`)}
              </label>
              <input
                className="w-full px-3 py-4 border border-gray-700 rounded-md text-white bg-transparent focus:outline-none focus:ring"
                id="username"
                placeholder="John Doe"
                type="text"
                value={username}
                onChange={usernameOnChange}
              />
            </div>
          )}

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium block text-gray-300 mb-3">
              {t(`${TRANSLATE_AUTH}.password`)}
            </label>
            <input
              className="w-full px-3 py-4 border border-gray-700 rounded-md text-white bg-transparent focus:outline-none focus:ring"
              id="password"
              placeholder="******"
              type="password"
              value={password}
              onChange={passwordOnChange}
            />
          </div>

          <button className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">
            {btnText}
          </button>
        </form>

        <div className="text-center text-gray-400">
          {formSubTitle}
          <Link to={routePath} className="text-red-500 hover:underline pl-1">
            {routeTitle}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
