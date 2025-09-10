import React from 'react';
import { Star, Edit, Trash2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const ReviewList = ({ reviews, onReviewUpdated, onReviewDeleted }) => {
  const { user, token } = useAuth();

  const handleDelete = async (reviewId) => {
    if (!window.confirm('Apakah Anda yakin ingin menghapus review ini?')) {
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Gagal menghapus review.');
      }

      if (onReviewDeleted) {
        onReviewDeleted(reviewId);
      }
    } catch (error) {
      console.error("Error deleting review:", error);
      alert(`Gagal menghapus review: ${error.message}`);
    }
  };

  if (!reviews || reviews.length === 0) {
    return <p className="text-gray-500 mt-4">Belum ada review untuk item ini.</p>;
  }

  return (
    <div className="mt-6 space-y-4">
      <h4 className="font-bold text-lg">Review Pelanggan:</h4>
      {reviews.map((review) => (
        <div key={review.id} className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-gray-800">{review.user_name}</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
          </div>
          <p className="text-gray-600 mt-2">{review.comment}</p>
          {user && user.id === review.user_id && (
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => alert('Edit functionality coming soon!')}
                className="text-blue-500 hover:text-blue-700 flex items-center text-sm"
              >
                <Edit size={16} className="mr-1" /> Edit
              </button>
              <button
                onClick={() => handleDelete(review.id)}
                className="text-red-500 hover:text-red-700 flex items-center text-sm"
              >
                <Trash2 size={16} className="mr-1" /> Hapus
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
