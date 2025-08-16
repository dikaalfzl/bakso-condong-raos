// src/components/MenuCard.jsx
import { useState } from 'react';
import { Plus, Minus, MessageCircle, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatRupiah, buildWaUrl } from '../utils/format'; // pastikan path ini ada

const MenuCard = ({ item, brand, phone }) => {
  const [qty, setQty] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);

  // 🔒 Metode ambil dikunci ke Takeaway (bungkus / ambil di tempat)
  const METHOD = 'Takeaway';

  const handleOrder = () => {
    const url = buildWaUrl({
      phone,
      brand,
      itemName: item.name,
      qty,
      unitPrice: item.price,
      name: '',
      method: METHOD, // ✅ selalu Takeaway (ambil di tempat)
      note: ''
    });
    window.open(url, '_blank');
  };

  const incrementQty = () => setQty((prev) => prev + 1);
  const decrementQty = () => setQty((prev) => Math.max(1, prev - 1));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card group hover:scale-105"
    >
      <div className="relative overflow-hidden">
        {!imageLoaded && (
          <div className="w-full h-48 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          </div>
        )}
        <img
          src={item.img}
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

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-600">
            Rp{formatRupiah(item.price)}
          </span>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {item.category}
          </span>
        </div>

        {/* 🔔 Info metode ambil ditampilkan sebagai label statis */}
        <p className="text-sm text-gray-600">
          Note : <span className="font-medium">Hanya menerima ambil/makan di tempat</span>
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center bg-gray-100 rounded-xl">
            <button
              onClick={decrementQty}
              className="p-3 hover:bg-gray-200 rounded-l-xl transition-colors duration-200 focus:ring-2 focus:ring-primary-200"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              <Minus size={16} />
            </button>
            <span className="px-4 py-3 font-semibold min-w-[60px] text-center">
              {qty}
            </span>
            <button
              onClick={incrementQty}
              className="p-3 hover:bg-gray-200 rounded-r-xl transition-colors duration-200 focus:ring-2 focus:ring-primary-200"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              <Plus size={16} />
            </button>
          </div>

          <button
            onClick={handleOrder}
            aria-label={`Pesan ${item.name} via WhatsApp`}
            className="btn-primary flex items-center gap-2 text-sm"
            style={{ minWidth: '44px', minHeight: '44px' }}
          >
            <MessageCircle size={16} />
            Order
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
