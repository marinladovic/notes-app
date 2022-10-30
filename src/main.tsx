import React from 'react';
import ReactDOM from 'react-dom/client';
import { NoteProvider } from './store/notes';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NoteProvider>
      <App />
    </NoteProvider>
  </React.StrictMode>
);
