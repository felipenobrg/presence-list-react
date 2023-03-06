import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css';

import { Home } from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
