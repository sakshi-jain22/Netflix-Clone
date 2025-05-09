import React from 'react';

interface IHomePage {
  icon?: boolean;
}

const HomePage: React.FC<IHomePage> = (props) => {
  console.log(props);

  return <div className="hero-bg h-screen">HomePage</div>;
};

export default HomePage;
