import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';

/**
 * Reactのエントリーポイント
 * - Reactをhtmlにレンダリングするエントリーポイント
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
