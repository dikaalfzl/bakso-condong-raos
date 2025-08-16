import { MapPin, Clock, Phone, Heart } from 'lucide-react';

const Footer = ({ brand, phone }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">{brand}</h3>
            <p className="text-gray-300 leading-relaxed">
              Bakso Sapi Asli dengan rasa autentik yang telah dipercaya.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak & Lokasi</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary-400 mt-1" size={20} />
                <div>
                  <p className="text-gray-300">Jl. Lanud Soekani No. 234</p>
                  <p className="text-gray-300">Majalengka 45454</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary-400" size={20} />
                <p className="text-gray-300">{phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-primary-400" size={20} />
                <p className="text-gray-300">Buka: 08:00 - 22:00 WIB</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Unggulan</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Bakso Sapi Asli</li>
              <li>• Mie Ayam Bakso Spesial</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2025 {brand}. Dibuat dengan <Heart className="text-red-500" size={16} /> untuk pecinta bakso.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;