
import React, { useState } from 'react';
import { Book, ShoppingCart, CreditCard, Smartphone, X, Shield } from 'lucide-react';
import PaymentModal from './PaymentModal';

const StorePage = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const books = [
    {
      id: 1,
      title: 'Physical Geography Questions',
      price: 10000,
      description: 'Comprehensive collection of physical geography questions and answers for advanced secondary school students.',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Map Read Work',
      price: 10000,
      description: 'Essential map reading exercises and practical work for Geography students to master cartographic skills.',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Human Geography',
      price: 10000,
      description: 'In-depth study materials covering human geography topics including population, settlement, and economic activities.',
      image: '/placeholder.svg'
    }
  ];

  const handleBuyNow = (book) => {
    setSelectedBook(book);
    setShowPaymentModal(true);
  };

  const formatPrice = (price) => {
    return `TSH ${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Geography <span className="text-green-600">Study Materials</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access high-quality Geography study materials designed to improve student performance 
            and examination results across Tanzania.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-64 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <Book size={80} className="text-green-600" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{book.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-green-600">
                    {formatPrice(book.price)}
                  </div>
                  <div className="text-sm text-gray-500">
                    Digital Copy
                  </div>
                </div>
                
                <button
                  onClick={() => handleBuyNow(book)}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <ShoppingCart className="mr-2" size={20} />
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Security Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-16">
          <div className="flex items-start">
            <Shield className="text-blue-600 mr-4 mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Security Notice</h3>
              <p className="text-blue-800 leading-relaxed">
                Your payment information is secured and encrypted. Please ensure your details are 
                correct before submission. We are committed to protecting your personal and financial information.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Materials?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Content</h3>
              <p className="text-green-100">
                Materials developed by experienced Geography educators with proven track records.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
              <p className="text-green-100">
                High-quality educational materials at prices that make them accessible to all schools.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Access</h3>
              <p className="text-green-100">
                Digital copies available for instant download after successful payment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <PaymentModal
          book={selectedBook}
          onClose={() => {
            setShowPaymentModal(false);
            setSelectedBook(null);
          }}
        />
      )}
    </div>
  );
};

export default StorePage;
