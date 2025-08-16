import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppFAB = ({ phone }) => {
  const handleWhatsApp = () => {
    const cleaned = String(phone).replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleaned}`, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 focus:ring-4 focus:ring-green-200"
      style={{ minWidth: '64px', minHeight: '64px' }}
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={24} />
    </motion.button>
  );
};

export default WhatsAppFAB;