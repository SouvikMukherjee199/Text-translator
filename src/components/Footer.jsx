import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-gray-900 shadow-xl text-gray-300 py-8 font-sans mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          {/* Copyright and Brand */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500">
             Transliscense
            </span>
            <p className="mt-2 text-sm text-gray-400">
              &copy; {new Date().getFullYear()} by Souvik Mukherjee. All rights reserved.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex justify-between lg:flex-1 lg:items-center items-center mt-4 md:mt-0 md:flex gap-3.5 md:items-center md:justify-end md:space-x-6">
            <Link to="#" className="text-sm mt-2 lg:mt-0 font-medium hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="#" className="mt-2 md:mt-0 text-sm font-medium hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="#" className="mt-2 md:mt-0 text-sm font-medium hover:text-white transition-colors duration-300">
              Sitemap
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex mt-4 md:mt-0 md:ml-6 space-x-4">
            <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              {/* Twitter SVG Icon */}
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022 5.68a10.9 10.9 0 01-3.46 1.33A4.48 4.48 0 0015.5 4a4.48 4.48 0 00-4.5 4.5c0 .35.04.69.1.99A12.72 12.72 0 013 3.5a4.48 4.48 0 001.4 5.96 4.45 4.45 0 01-2.04-.56v.05a4.48 4.48 0 003.6 4.4A4.49 4.49 0 017 14.5a4.5 4.5 0 01-3-.93 12.63 12.63 0 007.44 2.5a12.72 12.72 0 008.5-4.5 12.63 12.63 0 000-11.45"></path>
              </svg>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              {/* Instagram SVG Icon */}
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8a4 4 0 013.37 3.37z"></path>
                <line x1="17.5" x2="17.5" y1="6.5" y2="6.5"></line>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;