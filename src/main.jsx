import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectsPage from './Pages/ProjectsPage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  </StrictMode>
)
