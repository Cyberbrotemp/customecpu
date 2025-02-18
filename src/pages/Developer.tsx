import React, { useEffect } from 'react';
import { Github, Instagram, MessageSquare, Globe } from 'lucide-react';

interface DeveloperProps {
  speak: (text: string) => void;
}

const Developer: React.FC<DeveloperProps> = ({ speak }) => {
  useEffect(() => {
    speak("Meet our developer team");
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
          }}
        />
        
        <div className="relative z-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Our Development Team
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Passionate developers building the future of custom PC solutions
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {/* Developer Card Example */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="aspect-w-1 aspect-h-1 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="Developer"
                    className="object-cover rounded-full w-32 h-32 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">John Doe</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mt-2">Lead Developer</p>
                
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600">
                    <MessageSquare className="h-5 w-5" />
                  </a>
                  <a href="https://website.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600">
                    <Globe className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              {/* Add more developer cards as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developer;