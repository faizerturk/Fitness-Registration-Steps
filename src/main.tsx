import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import { StepDataProvider } from './context/StepDataContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <StepDataProvider>
        <App />
      </StepDataProvider>
    </LanguageProvider>
  </React.StrictMode>
);
