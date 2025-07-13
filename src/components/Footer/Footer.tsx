import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Unravl.org
          </p>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/unravl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://twitter.com/unravl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a 
              href="https://linkedin.com/company/unravl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;