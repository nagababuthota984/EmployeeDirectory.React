import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/authProvider';
import { msalInstance } from './oauth/msalOAuth';
import { MsalProvider } from '@azure/msal-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <AuthProvider>
      <MsalProvider instance={msalInstance}>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
      </MsalProvider>
    </AuthProvider>
  </BrowserRouter>
);


