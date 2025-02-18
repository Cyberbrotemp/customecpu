import React from 'react';
import { Github, Instagram, MessageSquare, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              <MessageSquare className="h-6 w-6" />
            </a>
            <a href="https://website.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Globe className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-400">© 2024 Quantum Build. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;