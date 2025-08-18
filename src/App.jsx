import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Cooperativa Divemotor - Tu Aliado Financiero</title>
        <meta name="description" content="Cooperativa Divemotor, tu fondo de empleados. Ofrecemos soluciones de ahorro y crédito pensadas para tu bienestar y futuro." />
        <meta property="og:title" content="Cooperativa Divemotor - Tu Aliado Financiero" />
        <meta property="og:description" content="Cooperativa Divemotor, tu fondo de empleados. Ofrecemos soluciones de ahorro y crédito pensadas para tu bienestar y futuro." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;