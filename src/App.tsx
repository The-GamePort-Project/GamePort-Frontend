import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/layout/header/Header';

import './App.css';
export interface Todo {
  id: string;
  completed: boolean;
  task: string;
}
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
