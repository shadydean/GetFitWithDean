import React, { useState } from 'react';
import image from '../assets/649604.png';
import { Link } from 'react-router-dom';


const Navbar = ({ isLoggedIn, onLoginClick}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-200 shadow shadow-gray-300 w-full px-8 md:px-auto" aria-label="Main Navigation">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        {/* Logo */}
        <div className="text-indigo-500 md:order-1">
          <img src={image} alt='Logo' className='h-10 w-auto' />
        </div>

        {/* Navigation Links */}
        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            {isLoggedIn ? (
              <>
                <li className="md:px-4 md:py-2 text-indigo-500">
                  <Link to="/dashboard" aria-current="page">Dashboard</Link>
                </li>
                <li className="md:px-4 md:py-2 hover:text-indigo-400">
                  <Link to="/courses">My Courses</Link>
                </li>
                <li className="md:px-4 md:py-2 hover:text-indigo-400">
                  <Link to="/progress">My Progress</Link>
                </li>
                <li className="md:px-4 md:py-2 hover:text-indigo-400">
                  <Link to="#">Leaderboard</Link>
                </li>
                {/* Other logged-in user links */}
              </>
            ) : (
              <>
                <li className="md:px-4 md:py-2 hover:text-indigo-400">
                  <a href="#">About</a>
                </li>
                <li className="md:px-4 md:py-2 hover:text-indigo-400">
                  <a href="#">Contact</a>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* User Actions */}
        <div className="order-2 md:order-3">
          {isLoggedIn ? (
            <div className="relative">
              <button 
                className="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full"
                onClick={toggleDropdown}
              >
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2a5 5 0 00-5 5v1a5 5 0 0010 0V7a5 5 0 00-5-5zm0 14c-4 0-7 2.5-7 7h14c0-4.5-3-7-7-7z" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
                  <ul className="py-1">
                    <li>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button onClick={onLoginClick} className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Login</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
