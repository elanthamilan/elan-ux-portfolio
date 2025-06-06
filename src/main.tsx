import './index.css'; // Keep global styles
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

// PWA Service Worker is handled by Vite PWA plugin via registerSW.js
// No manual registration needed here

ReactDOM.createRoot(document.getElementById('root')!).render(
  // Use React.StrictMode for development checks
  <React.StrictMode>
    {/* Wrap the App with BrowserRouter to enable routing */}
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
