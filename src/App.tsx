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
        className={`App py-6 bg-slate-300 min-h-screen flex flex-col items-center
        sm:px-4
        md:px-8 
        lg:px-12
        xl:px-16`}
      >
        <Outlet />
      </main>
    </>
  );
}

export default App;
