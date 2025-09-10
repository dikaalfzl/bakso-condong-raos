import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ brand, phone }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#menu', label: 'Menu' },
    { href: '#tentang', label: 'Tentang' },
    { href: '#kontak', label: 'Kontak' },
  ];

  const handleWhatsApp = () => {
    const cleaned = String(phone).replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleaned}`, '_blank');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (loading) {
    return null; // Or a loading spinner
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary-600">{brand}</h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              {user ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="btn-primary flex items-center gap-2 text-sm"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="btn-primary flex items-center gap-2 text-sm"
                >
                  Login
                </Link>
              )}
              
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.label}
                </a>
              ))}
              {user ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="btn-primary w-full flex items-center justify-center gap-2 mt-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full flex items-center justify-center gap-2 mt-4"
                >
                  Login
                </Link>
              )}
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
