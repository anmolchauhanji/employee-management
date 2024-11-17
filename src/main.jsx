import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AUTH from './CONTEXT/AUTH.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AUTH>
      <App />
    </AUTH>
  </StrictMode>
);
