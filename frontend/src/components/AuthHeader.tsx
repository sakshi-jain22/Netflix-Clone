import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '/assets/images/netflix-logo.png';

const AuthHeader: React.FC = () => {
  return (
    <header className="max-w-6xl max-auto flex items-center justify-between p-4">
      <Link to={'/'}>
        <img src={Logo} alt="logo" className="w-52" />
      </Link>
    </header>
  );
};

export default AuthHeader;
