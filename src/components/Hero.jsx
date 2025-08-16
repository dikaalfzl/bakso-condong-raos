import { ArrowDown, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ brand, phone }) => {
  const handleWhatsApp = () => {
    const cleaned = String(phone).replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleaned}`, '_blank');
  };

  return (
    <section id="beranda" className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-primary-600">{brand}</span>
              <br />
              Condong Raos
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Mau bakso atau mie ayam? Tenang, di sini ada keduanya.
              Asli Solo, rasa tak tertandingi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#menu" className="btn-primary inline-flex items-center justify-center gap-2">
                <ArrowDown size={20} />
                Lihat Menu
              </a>
              <button
                onClick={handleWhatsApp}
                className="btn-outline inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Chat WhatsApp
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8969269/pexels-photo-8969269.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bakso & Mie Ayam 234"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;