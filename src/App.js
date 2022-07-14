import React from 'react';
import './App.css';
import { Routes, Route, } from "react-router-dom";

import Footer from "./components/Footer";
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
