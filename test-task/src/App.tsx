import React, { FC } from 'react';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';

const App: FC = () => {
  return (
    <div>
      <Header />
      <MainPage />
    </div>
  );
};

export default App;
