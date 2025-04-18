import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Ensure that you wrap your application with StrictMode and BrowserRouter
createRoot(document.getElementById('root')).render(
      <App />
);
