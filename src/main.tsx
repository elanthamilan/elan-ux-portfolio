import './index.css'; // Keep global styles
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'next-themes'; // Import ThemeProvider

ReactDOM.createRoot(document.getElementById('root')!).render(
  // Use React.StrictMode for development checks
  <React.StrictMode>
    {/* Wrap the App with BrowserRouter to enable routing */}
    <BrowserRouter>
      {/* Wrap App with ThemeProvider for theme management */}
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
