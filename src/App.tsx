import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './layout/header/Header';
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
      <main
        className={`App py-6 bg-amber-100 min-h-screen
        sm:px-4
        md:px-8 md:bg-red-100
        lg:px-12
        xl:px-16`}
      >
        <Outlet />
      </main>
    </>
  );
}

export default App;
