import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../assets/649604.png'; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Info */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Logo" className="h-12 mb-4 " style={{ filter: 'invert(1)' }}   />
          <p className="text-sm">
            Your brand's tagline or a short description can go here, giving visitors an idea of what you do.
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-500">Dashboard</a></li>
            <li><a href="#" className="hover:text-indigo-500">My Courses</a></li>
            <li><a href="#" className="hover:text-indigo-500">Leaderboard</a></li>
            <li><a href="#" className="hover:text-indigo-500">About</a></li>
            <li><a href="#" className="hover:text-indigo-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info & Social Media */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">1234 Street Name, City, Country</p>
          <p className="text-sm mb-2">Email: info@example.com</p>
          <p className="text-sm mb-4">Phone: +123 456 7890</p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-500"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-indigo-500"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-indigo-500"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Brand. All Rights Reserved.</p>
        <div className="space-x-4 mt-2">
          <a href="#" className="hover:text-indigo-500">Privacy Policy</a>
          <a href="#" className="hover:text-indigo-500">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
