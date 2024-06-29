import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Facts from './Facts/Facts';
import Register from './Register/Register'
import './App.css'; 

function App() {
    return (
        <Router>
            <nav className="navbar">
                <Link to='/' className="nav-link">Home</Link>
                <Link to='/about' className="nav-link">About</Link>
                <Link to='/facts' className="nav-link">Facts</Link>
                <Link to='/register' className="nav-link">Register</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/facts' element={<Facts />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
