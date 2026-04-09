import React from 'react';
import { PiggyBank } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
                <PiggyBank className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">COOPERATIVA</span>
                <p className="text-cyan-400 text-sm font-semibold">EMPRESA</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Tu aliado financiero para alcanzar tus metas.
            </p>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Líneas de Crédito</span>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Crédito de Vivienda</li>
              <li>Crédito de Estudio</li>
              <li>Libre Inversión</li>
              <li>Compra de Cartera</li>
            </ul>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Ahorro</span>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Ahorro Obligatorio</li>
              <li>Ahorro Voluntario</li>
              <li>Ahorro Programado</li>
            </ul>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Contacto</span>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>+57 (313)6294045</li>
              <li>contacto@empresacoop.com</li>
              <li>Bogotá, D.C.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 COOPERATIVA EMPRESA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;