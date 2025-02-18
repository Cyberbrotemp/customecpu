import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Moon, Sun, Bell } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  speak: (text: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ speak }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={() => speak("Welcome to Quantum Build")}>
              <Monitor className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Quantum Build</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/custom-pc" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Custom PC
            </Link>
            <Link to="/laptops" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Laptops
            </Link>
            <Link to="/developer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Developer
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
              <Bell className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;