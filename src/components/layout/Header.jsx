import React from 'react';
import { motion } from 'framer-motion';
import { PiggyBank, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  // URL de la intranet
  const intranetUrl = "https://grupokaufmann.sharepoint.com/sites/IntranetDivemotorColombia/Mis-Beneficios/Paginas/Cooperativa-Divemotor.aspx";

  const handleSociosClick = () => {
    // Abre la intranet en una nueva pestaña
    window.open(intranetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
              <PiggyBank className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">COOPERATIVA</h2>
              <p className="text-cyan-400 text-sm font-semibold">EMPRESA</p>
            </div>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-white hover:text-cyan-400 transition-colors">Inicio</a>
            <a href="#servicios" className="text-white hover:text-cyan-400 transition-colors">Servicios</a>
            <a href="#nosotros" className="text-white hover:text-cyan-400 transition-colors">Nosotros</a>
            <a href="#contacto" className="text-white hover:text-cyan-400 transition-colors">Contacto</a>
          </div>
          
          <Button
            onClick={handleSociosClick}
            className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
          >
            Área de Socios
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;