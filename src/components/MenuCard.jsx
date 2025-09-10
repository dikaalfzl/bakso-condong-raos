// src/components/MenuCard.jsx
import { useState } from 'react';
import { Flame, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatRupiah } from '../utils/format';

const MenuCard = ({ item, onItemClick, isList }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const roundedRating = item.reviews_count > 0 ? Math.round(item.reviews_avg_rating) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`card group hover:scale-105 cursor-pointer ${isList ? 'flex flex-row items-center p-4 space-x-4' : 'flex flex-col'}`}
      onClick={() => onItemClick(item)}
    >
      {isList ? (
        <>
          <div className="flex-shrink-0 w-24 h-24 relative overflow-hidden rounded-lg">
            {!imageLoaded && (
              <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
            )}
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                imageLoaded ? 'block' : 'hidden'
              }`}
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
            {/* Rating Section for List View */}
            {item.reviews_count > 0 ? (
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14} // Smaller stars for list view
                      className={i < roundedRating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">
                  ({item.reviews_count} review)
                </span>
              </div>
            ) : (
              <p className="text-xs text-gray-400 mt-1">Belum ada review</p>
            )}
            <div className="flex items-center justify-between mt-2">
              <span className="text-xl font-bold text-primary-600">
                Rp{formatRupiah(item.price)}
              </span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {item.category}
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="relative overflow-hidden">
            {!imageLoaded && (
              <div className="w-full h-48 bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              </div>
            )}
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 ${
                imageLoaded ? 'block' : 'hidden'
              }`}
            />
            {item.spicy && (
              <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <Flame size={12} />
                Pedas
              </div>
            )}
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.description}</p>
              
              {/* Rating Section */}
              {item.reviews_count > 0 ? (
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < roundedRating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    ({item.reviews_count} review)
                  </span>
                </div>
              ) : (
                <p className="text-xs text-gray-400">Belum ada review</p>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-2xl font-bold text-primary-600">
                Rp{formatRupiah(item.price)}
              </span>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {item.category}
              </span>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default MenuCard;
