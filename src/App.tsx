import React from 'react';
import './App.css';
import Main_page from './pages/main_page';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={< Main_page/>} />
      </Routes>
    </Router>
  );
}

export default App;
