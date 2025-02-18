import React, { useEffect, useState } from 'react';
import { Download, Search, ShoppingCart } from 'lucide-react';
import toast from 'react-hot-toast';
import ReactToPdf from 'react-to-pdf';

interface Laptop {
  id: string;
  brand: string;
  model: string;
  category: string;
  price: number;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    display: string;
    graphics: string;
  };
  image: string;
}

interface LaptopsProps {
  speak: (text: string) => void;
}

const laptops: Laptop[] = [
  {
    id: '1',
    brand: 'ASUS',
    model: 'ROG Strix G15',
    category: 'Gaming',
    price: 129999,
    specs: {
      processor: 'AMD Ryzen 9 5900HX',
      ram: '32GB DDR4',
      storage: '1TB NVMe SSD',
      display: '15.6" QHD 165Hz',
      graphics: 'NVIDIA RTX 3080 8GB'
    },
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '2',
    brand: 'HP',
    model: 'Envy x360',
    category: 'Editing',
    price: 89999,
    specs: {
      processor: 'Intel Core i7-1165G7',
      ram: '16GB DDR4',
      storage: '512GB NVMe SSD',
      display: '15.6" 4K OLED Touch',
      graphics: 'Intel Iris Xe'
    },
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }
];

const categories = ['All', 'Gaming', 'Editing', 'Business', 'Student'];

const Laptops: React.FC<LaptopsProps> = ({ speak }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    speak("Browse our collection of premium laptops for every need.");
  }, []);

  const filteredLaptops = laptops.filter(laptop => {
    const matchesCategory = selectedCategory === 'All' || laptop.category === selectedCategory;
    const matchesSearch = laptop.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         laptop.model.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppOrder = (laptop: Laptop) => {
    const message = `Interested in buying:
${laptop.brand} ${laptop.model}
Price: ₹${laptop.price}
Category: ${laptop.category}`;

    window.open(`https://wa.me/xxxxx?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Search and Filter */}
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="flex space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search laptops..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Laptop Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredLaptops.map(laptop => (
          <div
            key={laptop.id}
            id={`laptop-${laptop.id}`}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={laptop.image}
              alt={`${laptop.brand} ${laptop.model}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {laptop.brand} {laptop.model}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-2">
                ₹{laptop.price.toLocaleString()}
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Processor:</span> {laptop.specs.processor}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">RAM:</span> {laptop.specs.ram}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Storage:</span> {laptop.specs.storage}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Display:</span> {laptop.specs.display}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Graphics:</span> {laptop.specs.graphics}
                </p>
              </div>
              <div className="mt-6 flex space-x-4">
                <ReactToPdf targetRef={document.getElementById(`laptop-${laptop.id}`)} filename={`${laptop.brand}-${laptop.model}.pdf`}>
                  {({toPdf}: {toPdf: () => void}) => (
                    <button
                      onClick={toPdf}
                      className="flex-1 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      PDF
                    </button>
                  )}
                </ReactToPdf>
                <button
                  onClick={() => handleWhatsAppOrder(laptop)}
                  className="flex-1 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laptops;