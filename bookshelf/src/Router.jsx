import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Search from './pages/Search';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default Router;
