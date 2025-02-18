import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CustomPC from './pages/CustomPC';
import Laptops from './pages/Laptops';
import Developer from './pages/Developer';
import { ThemeProvider } from './context/ThemeContext';
import Footer from './components/Footer';

function App() {
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSpeechSynthesis(window.speechSynthesis);
    }
  }, []);

  const speak = (text: string) => {
    if (speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Navbar speak={speak} />
          <Routes>
            <Route path="/" element={<Home speak={speak} />} />
            <Route path="/custom-pc" element={<CustomPC speak={speak} />} />
            <Route path="/laptops" element={<Laptops speak={speak} />} />
            <Route path="/developer" element={<Developer speak={speak} />} />
          </Routes>
          <Footer />
          <Toaster position="bottom-right" />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;