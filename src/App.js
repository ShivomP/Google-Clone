import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<SearchPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
