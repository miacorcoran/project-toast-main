import React from 'react';
import ReactDOM from 'react-dom/client';

import './global-styles.css';
// Imports main app component
import App from './components/App';

// Where react is mounted
const root = ReactDOM.createRoot(document.getElementById('root'));
// Renders everything
root.render(<App />);
