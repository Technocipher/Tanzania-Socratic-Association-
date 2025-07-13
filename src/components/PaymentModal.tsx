
import React, { useState } from 'react';
import { X, Smartphone, CheckCircle, Clock } from 'lucide-react';

interface PaymentModalProps {
  book: {
    id: number;
    title: string;
    price: number;
  };
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ book, onClose }) => {
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const networks = [
    { id: 'vodacom', name: 'Vodacom M-Pesa', prefix: '+255 75' },
    { id: 'airtel', name: 'Airtel Money', prefix: '+255 78' },
    { id: 'tigo', name: 'Tigo Pesa', prefix: '+255 71' },
    { id: 'halopesa', name: 'Halo Pesa', prefix: '+255 76' }
  ];

  const handleNetworkChange = (networkId: string) => {
    setSelectedNetwork(networkId);
    const network = networks.find(n => n.id === networkId);
    if (network) {
      setPhoneNumber(network.prefix);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedNetwork || !phoneNumber || !customerName || !address) {
      alert('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);

    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false);
      setShowConfirmation(true);

      // Send details to WhatsApp
      const networkName = networks.find(n => n.id === selectedNetwork)?.name;
      const message = `New Book Order Request:
      
📚 Book: ${book.title}
💰 Price: TSH ${book.price.toLocaleString()}
👤 Customer: ${customerName}
📱 Phone: ${phoneNumber}
🏢 Network: ${networkName}
📍 Address: ${address}

Please confirm this mobile money payment.`;

      const whatsappUrl = `https://wa.me/255752837561?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      // Auto close after showing confirmation
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 2000);
  };

  if (showConfirmation) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
          <CheckCircle className="mx-auto text-green-600 mb-4" size={64} />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Initiated!</h2>
          <p className="text-gray-600 mb-6">
            Your payment request has been processed. Please complete the payment on your mobile device and we'll contact you shortly to confirm your order.
          </p>
          <button
            onClick={onClose}
            className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  if (isProcessing) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
          <Clock className="mx-auto text-blue-600 mb-4 animate-spin" size={64} />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Processing Payment...</h2>
          <p className="text-gray-600 mb-6">
            Please wait for confirmation from your network provider. This may take a few moments.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Purchase {book.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900">{book.title}</h3>
            <p className="text-2xl font-bold text-green-600">TSH {book.price.toLocaleString()}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Your Mobile Network *
              </label>
              <div className="grid grid-cols-2 gap-2">
                {networks.map((network) => (
                  <button
                    key={network.id}
                    type="button"
                    onClick={() => handleNetworkChange(network.id)}
                    className={`p-3 border rounded-lg text-sm font-medium transition-colors ${
                      selectedNetwork === network.id
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-300 hover:border-green-300'
                    }`}
                  >
                    <Smartphone className="mx-auto mb-1" size={20} />
                    {network.name}
                  </button>
                ))}
              </div>
            </div>

            {selectedNetwork && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number for Payment *
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter the phone number you'll use for payment"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter the exact number registered with your mobile money account
                </p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name (as registered on mobile money) *
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your full name as registered on your mobile money account"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Address *
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                placeholder="Enter your complete delivery address"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Payment Process:</strong> After clicking "Pay Now", you'll receive a mobile money prompt on your phone. 
                Please complete the payment and wait for confirmation. We'll process your order once payment is confirmed.
              </p>
            </div>

            <button
              type="submit"
              disabled={!selectedNetwork || !phoneNumber || !customerName || !address}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
