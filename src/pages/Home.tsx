import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Laptop } from 'lucide-react';

interface HomeProps {
  speak: (text: string) => void;
}

const Home: React.FC<HomeProps> = ({ speak }) => {
  useEffect(() => {
    speak("Welcome to Quantum Build. Your one-stop shop for custom PCs and laptops.");
  }, []);

  return (
    <div className="relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          filter: 'brightness(0.7)'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Build Your Dream Machine
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Custom PCs and Premium Laptops tailored to your needs
          </p>
          
          <div className="mt-10 flex justify-center space-x-6">
            <Link
              to="/custom-pc"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Monitor className="mr-2 h-5 w-5" />
              Build Custom PC
            </Link>
            <Link
              to="/laptops"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
            >
              <Laptop className="mr-2 h-5 w-5" />
              Browse Laptops
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;