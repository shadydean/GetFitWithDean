import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Courses from '../pages/Courses';
import MyProgress from '../pages/MyProgress';

const AppRoutes = ({ setIsLoggedIn }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/progress" element={<MyProgress />} />
    </Routes>
  );
};

export default AppRoutes;
