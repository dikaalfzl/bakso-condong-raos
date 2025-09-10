import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const MenuDetailModal = ({ item, onClose }) => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    if (!item) return;
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/menu-items/${item.id}/reviews`);
      if (!response.ok) {
        throw new Error('Gagal mengambil data review');
      }
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [item]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top, non-scrollable part */}
          <div className="p-8 pb-6 flex-shrink-0 relative">
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors z-10"
            >
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{item.name}</h2>
            <p className="text-lg text-gray-600 mb-4">{item.description}</p>
            <p className="text-2xl font-bold text-primary-600">
              Rp {item.price.toLocaleString('id-ID')}
            </p>
          </div>

          {/* Bottom, scrollable part */}
          <div className="overflow-y-auto bg-gray-50 p-8 border-t">
            <ReviewList reviews={reviews} onReviewUpdated={fetchReviews} onReviewDeleted={fetchReviews} />
            <ReviewForm menuItemId={item.id} onReviewSubmit={fetchReviews} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuDetailModal;
