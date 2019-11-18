import React from 'react';

import Header from './components/Header/header';
import Register from './components/Register/register';
import Menu from './components/Lateral_Menu/lateralMenu';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Register />
      <Menu />
    </>
  );
}

export default App;
