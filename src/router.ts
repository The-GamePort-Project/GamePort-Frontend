import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import App from './App';
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: React.createElement(App),
    children: [
      {
        path: '/',
        element: React.createElement(HomePage),
      },
    ],
  },
]);

export default router;
