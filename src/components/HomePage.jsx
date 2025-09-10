// src/pages/HomePage.jsx
import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Users, Clock, MapPin } from "lucide-react";

import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import SearchBar from "../components/SearchBar.jsx";
import CategoryFilters from "../components/CategoryFilters.jsx";
import MenuGrid from "../components/MenuGrid.jsx";
import Footer from "../components/Footer.jsx";
import WhatsAppFAB from "../components/WhatsAppFAB.jsx";
import MenuDetailModal from "../components/MenuDetailModal.jsx";

const BRAND = 'Bakso & Mie Ayam 234';
const PHONE_WA = '6285216742345';

const HomePage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        // Menggunakan path absolut untuk API
        const response = await fetch('http://localhost:8000/api/menu-items');
        const data = await response.json();
        setMenuItems(data);
        const uniqueCategories = [...new Set(data.map(item => item.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Failed to fetch menu data:", error);
      }
    };

    fetchMenuData();
  }, []);

  const filteredItems = useMemo(() => {
    let filtered = menuItems;

    if (activeCategory !== 'Semua') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [menuItems, activeCategory, searchTerm]);

  const handleWhatsApp = () => {
    const cleaned = PHONE_WA.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleaned}`, '_blank');
  };

  return (
    <>
      <Navbar brand={BRAND} phone={PHONE_WA} />
      <main>
        <Hero brand={BRAND} phone={PHONE_WA} />
        <section id="menu" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Menu Istimewa</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Pilihan menu terbaik dengan cita rasa autentik yang siap memanjakan lidah Anda
              </p>
            </motion.div>
            <CategoryFilters
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            <MenuGrid
              items={filteredItems}
              onItemClick={setSelectedItem}
            />
          </div>
        </section>
        <section id="tentang" className="py-20 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold text-gray-900">Tentang Kami</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {BRAND} telah melayani keluarga Indonesia dengan bakso berkualitas tinggi 
                  sejak bertahun-tahun. Kami menggunakan daging sapi pilihan dan bumbu 
                  rempah alami untuk menciptakan cita rasa yang tak terlupakan.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Setiap mangkuk bakso dibuat dengan penuh cinta dan dedikasi untuk 
                  memberikan pengalaman kuliner terbaik bagi pelanggan setia kami.
                </p>
                <div className="bg-green-100 border border-green-200 rounded-xl p-4 inline-flex items-center gap-3">
                  <Award className="text-green-600" size={24} />
                  <span className="font-semibold text-green-800">Bersertifikat HALAL MUI</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <Users className="text-primary-600 mx-auto mb-3" size={40} />
                  <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
                  <p className="text-gray-600">Pelanggan Setia</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <Clock className="text-primary-600 mx-auto mb-3" size={40} />
                  <h3 className="text-2xl font-bold text-gray-900">10+</h3>
                  <p className="text-gray-600">Tahun Pengalaman</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="kontak" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontak & Lokasi</h2>
              <p className="text-xl text-gray-600">
                Temukan kami dan rasakan langsung kelezatan bakso kami
              </p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary-600 mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Alamat</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Jl. Lanud Soekani No.234<br />
                        Jatiwangi 45454<br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <Clock className="text-primary-600 mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Jam Buka</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Senin - Sabtu: 10:00 - 22:00 WIB</p>
                        <p>Minggu: 13:00 - 22:00 WIB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="btn-primary w-full text-lg py-4"
                >
                  Hubungi Kami via WhatsApp
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-200 rounded-2xl overflow-hidden h-96"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d294.50325482534765!2d108.25399799833406!3d-6.727362035279122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ed96a1eaaafbd%3A0xe29121f16983a78a!2sBakso%20%26%20Mie%20Ayam%20234%20Condong%20Raos!5e0!3m2!1sid!2sid!4v1755328737946!5m2!1sid!2sid"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Bakso & Mie Ayam 234 Condong Raos"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer brand={BRAND} phone={PHONE_WA} />
      <WhatsAppFAB phone={PHONE_WA} />
      {selectedItem && (
        <MenuDetailModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </>
  );
}

export default HomePage;
