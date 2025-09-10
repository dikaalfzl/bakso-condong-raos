import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const ReviewForm = ({ menuItemId, onReviewSubmit }) => {
  const { user, token } = useAuth();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          menu_item_id: menuItemId,
          rating: rating,
          comment: comment,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Gagal mengirim review.');
      }

      // Reset form and notify parent
      setRating(0);
      setComment('');
      if (onReviewSubmit) {
        onReviewSubmit();
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return (
      <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-600">
        <p>Silakan <Link to="/login" className="text-primary-600 hover:underline">login</Link> untuk menulis review.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 pt-6 border-t border-gray-200">
      <h4 className="font-bold text-lg mb-4">Tulis Review Anda</h4>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <Star
                  key={starValue}
                  size={24}
                  className={`cursor-pointer transition-colors ${
                    starValue <= (hoverRating || rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                  }`}
                  onClick={() => !isSubmitting && setRating(starValue)}
                  onMouseEnter={() => !isSubmitting && setHoverRating(starValue)}
                  onMouseLeave={() => setHoverRating(0)}
                />
              );
            })}
          </div>
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Komentar</label>
          <textarea
            id="comment"
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            required
            disabled={isSubmitting}
          ></textarea>
        </div>
        
        {error && <p className="text-sm text-red-600">{error}</p>}

        <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Mengirim...' : 'Kirim Review'}
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
