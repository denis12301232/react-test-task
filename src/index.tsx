import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import router from '@/routes';
import './assets/css/index.scss';
import { RouterProvider } from 'react-router-dom';

const container = document.getElementById('root');

createRoot(container!).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);
