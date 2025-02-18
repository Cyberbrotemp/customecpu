import React, { useEffect, useState } from 'react';
import { Download, ShoppingCart } from 'lucide-react';
import toast from 'react-hot-toast';
import ReactToPdf from 'react-to-pdf';

interface PCComponent {
  category: string;
  name: string;
  price: number;
  image: string;
  benchmark?: string;
}

interface ComponentCategory {
  name: string;
  options: PCComponent[];
}

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface CustomPCProps {
  speak: (text: string) => void;
}

const componentCategories: ComponentCategory[] = [
  {
    name: 'Processor',
    options: [
      {
        category: 'Processor',
        name: 'AMD Ryzen 9 7950X',
        price: 59999,
        image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        benchmark: '45,876'
      },
      {
        category: 'Processor',
        name: 'Intel Core i9-13900K',
        price: 54999,
        image: 'https://images.unsplash.com/photo-1555617778-02518510b9fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        benchmark: '44,982'
      }
    ]
  },
  {
    name: 'Motherboard',
    options: [
      {
        category: 'Motherboard',
        name: 'ASUS ROG X670E Hero',
        price: 49999,
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      },
      {
        category: 'Motherboard',
        name: 'MSI MEG Z790 ACE',
        price: 45999,
        image: 'https://images.unsplash.com/photo-1563791877383-3d860c034da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      }
    ]
  }
];

const CustomPC: React.FC<CustomPCProps> = ({ speak }) => {
  const [selectedComponents, setSelectedComponents] = useState<Record<string, PCComponent>>({});
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    speak("Welcome to our custom PC builder. Select your components to create your dream machine.");
  }, []);

  const calculateTotal = () => {
    return Object.values(selectedComponents).reduce((total, component) => total + component.price, 0);
  };

  const calculateGST = () => {
    return calculateTotal() * 0.18;
  };

  const handleComponentSelect = (component: PCComponent) => {
    setSelectedComponents(prev => ({
      ...prev,
      [component.category]: component
    }));
    toast.success(`${component.name} added to your build`);
  };

  const handleWhatsAppOrder = () => {
    const total = calculateTotal();
    const gst = calculateGST();
    const message = `New PC Build Order:
Components: ${Object.values(selectedComponents).map(c => c.name).join(', ')}
Total: ₹${total + gst}
Customer: ${userInfo.name}
Phone: ${userInfo.phone}
Email: ${userInfo.email}
Address: ${userInfo.address}`;

    window.open(`https://wa.me/xxxxx?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Component Selection */}
        <div className="lg:col-span-2 space-y-8">
          {componentCategories.map((category) => (
            <div key={category.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.options.map((component) => (
                  <div
                    key={component.name}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedComponents[category.name]?.name === component.name
                        ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900'
                        : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300'
                    }`}
                    onClick={() => handleComponentSelect(component)}
                  >
                    <img
                      src={component.image}
                      alt={component.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{component.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">₹{component.price.toLocaleString()}</p>
                    {component.benchmark && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">Benchmark: {component.benchmark}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Build Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sticky top-4">
            <div id="pc-build-summary">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Build Summary</h2>
              <div className="space-y-4 mb-6">
                {Object.values(selectedComponents).map((component) => (
                  <div key={component.name} className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">{component.name}</span>
                    <span className="text-gray-900 dark:text-white">₹{component.price.toLocaleString()}</span>
                  </div>
                ))}
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                    <span className="text-gray-900 dark:text-white">₹{calculateTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">GST (18%)</span>
                    <span className="text-gray-900 dark:text-white">₹{calculateGST().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold mt-2">
                    <span className="text-gray-900 dark:text-white">Total</span>
                    <span className="text-gray-900 dark:text-white">
                      ₹{(calculateTotal() + calculateGST()).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* User Information Form */}
            <div className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                value={userInfo.name}
                onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                value={userInfo.email}
                onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                value={userInfo.phone}
                onChange={(e) => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
              />
              <textarea
                placeholder="Address"
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                value={userInfo.address}
                onChange={(e) => setUserInfo(prev => ({ ...prev, address: e.target.value }))}
              />
            </div>

            <div className="space-y-4">
              <ReactToPdf targetRef={document.getElementById('pc-build-summary')} filename="quantum-build-pc.pdf">
                {({toPdf}: {toPdf: () => void}) => (
                  <button
                    onClick={toPdf}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF
                  </button>
                )}
              </ReactToPdf>
              <button
                onClick={handleWhatsAppOrder}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPC;