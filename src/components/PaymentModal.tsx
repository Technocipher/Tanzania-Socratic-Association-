
import React, { useState } from 'react';
import { X, CreditCard, Smartphone } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookTitle: string;
  price: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, bookTitle, price }) => {
  const [paymentMethod, setPaymentMethod] = useState<'visa' | 'mpesa'>('visa');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    mpesaPhone: '',
    address: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with actual payment processing
    alert(`Payment processing for ${bookTitle} would be handled here. This is a demo.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Complete Purchase</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900">{bookTitle}</h3>
            <p className="text-green-600 font-bold">{price}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex space-x-4 mb-4">
              <button
                type="button"
                onClick={() => setPaymentMethod('visa')}
                className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                  paymentMethod === 'visa'
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-300 text-gray-700'
                }`}
              >
                <CreditCard className="mx-auto mb-2" size={24} />
                <span className="text-sm font-medium">Visa Card</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('mpesa')}
                className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                  paymentMethod === 'mpesa'
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-300 text-gray-700'
                }`}
              >
                <Smartphone className="mx-auto mb-2" size={24} />
                <span className="text-sm font-medium">M-Pesa</span>
              </button>
            </div>

            {paymentMethod === 'visa' ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
                    <input
                      type="text"
                      name="expiryMonth"
                      value={formData.expiryMonth}
                      onChange={handleInputChange}
                      placeholder="MM"
                      maxLength={2}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                    <input
                      type="text"
                      name="expiryYear"
                      value={formData.expiryYear}
                      onChange={handleInputChange}
                      placeholder="YY"
                      maxLength={2}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      maxLength={3}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">M-Pesa Phone Number</label>
                <input
                  type="tel"
                  name="mpesaPhone"
                  value={formData.mpesaPhone}
                  onChange={handleInputChange}
                  placeholder="+255 XXX XXX XXX"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                placeholder="Enter your delivery address or pickup instructions"
              />
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                🔒 Your payment information is secured and encrypted. Please ensure your details are correct before submission.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Complete Purchase
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
