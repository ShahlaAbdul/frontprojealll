import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from "react-helmet-async";
import SearchProvider from './useContect/SearchContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <SearchProvider>
    <App />
      </SearchProvider>
    </HelmetProvider>
  </React.StrictMode>
);

