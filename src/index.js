import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client' for React 18
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';  // Use Navigate instead of Redirect

import './style.css';
import TV1 from './views/tv1';
import NotFound from './views/not-found';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TV1 />} />
        <Route path="*" element={<NotFound />} />
        {/* Redirection to NotFound for undefined paths */}
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Router>
  );
};

// Create a root element and use the render method for React 18
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);  // Render the App component
