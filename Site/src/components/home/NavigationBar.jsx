import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Menu, X } from 'lucide-react';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Verificar se usuário admin está logado
    const adminStatus = localStorage.getItem('isAdmin');
    setIsAdmin(adminStatus === 'true');
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    setIsAdmin(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className={`p-2 rounded-2xl ${
                scrolled
                  ? 'bg-gradient-to-br from-emerald-600 to-emerald-700'
                  : 'bg-white/90'
              }`}>
                <Leaf className={`w-6 h-6 ${
                  scrolled ? 'text-white' : 'text-emerald-600'
                }`} />
              </div>
              <span className={`text-2xl font-medium ${
                scrolled ? 'text-stone-900' : 'text-stone-900'
              }`}>
                ADAE
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('sobre')}
                className={`font-light transition-colors ${
                  scrolled
                    ? 'text-stone-700 hover:text-emerald-600'
                    : 'text-stone-900 hover:text-emerald-600'
                }`}
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className={`font-light transition-colors ${
                  scrolled
                    ? 'text-stone-700 hover:text-emerald-600'
                    : 'text-stone-900 hover:text-emerald-600'
                }`}
              >
                Contato
              </button>
              {isAdmin && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                  className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full font-light shadow-lg hover:shadow-xl transition-all"
                >
                  Sair
                </motion.button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-stone-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-stone-900" />
              ) : (
                <Menu className="w-6 h-6 text-stone-900" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gradient-to-br from-emerald-50 via-white to-amber-50 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => scrollToSection('sobre')}
                className="text-3xl font-light text-stone-900 hover:text-emerald-600 transition-colors"
              >
                Sobre
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => scrollToSection('contato')}
                className="text-3xl font-light text-stone-900 hover:text-emerald-600 transition-colors"
              >
                Contato
              </motion.button>
              {isAdmin && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                  className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full text-xl font-light shadow-lg"
                >
                  Sair
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationBar;
