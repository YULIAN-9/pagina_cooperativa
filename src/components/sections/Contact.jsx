import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';
import { FaWhatsapp } from 'react-icons/fa';

// Inicializa EmailJS con tu Public Key
emailjs.init("GAg7TOC2Z86cHZWFN");

const contactData = [
  {
    icon: Phone,
    title: "Teléfono",
    info: "+57 (313) 6294045",
    description: "Llámanos de Lunes a Viernes de 8:00 AM a 5:00 PM"
  },
  {
    icon: Mail,
    title: "Email",
    info: "contacto@empresaccop.com",
    description: "Escríbenos para consultas, solicitudes o asesorías"
  },
  {
        icon: FaWhatsapp, // ← Cambia MessageCircle por FaWhatsapp
    title: "WhatsApp",
    info: "+57 (313) 6294045",
    description: "Chatea con nosotros para respuestas más rápidas",
    whatsapp: true
  },
  {
    icon: MapPin,
    title: "Oficina Principal",
    info: "Bogotá, D.C.",
    description: "Visítanos para una atención personalizada"
  }
];

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                'service_73uug6o',
                'template_7iiqu9v',
                formRef.current
            );
            
            toast({
                title: "¡Mensaje enviado!",
                description: "Nos pondremos en contacto pronto.",
            });
            formRef.current.reset();
        } catch (error) {
            toast({
                title: "Error",
                description: "No pudimos enviar tu mensaje. Intenta de nuevo.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contacto" className="py-20 px-6 bg-black/20">
            <div className="container mx-auto">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Ponte en Contacto</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        ¿Tienes preguntas? Nuestro equipo está listo para ayudarte a tomar las mejores decisiones financieras.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-4 gap-8 mb-16">
                    {contactData.map((contact, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group"
                        >
                            {contact.whatsapp ? (
                                <a
                                    href={`https://wa.me/573136294045?text=Hola,%20me%20gustaría%20más%20información%20sobre%20los%20servicios%20de%20la%20cooperativa`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full"
                                >
                                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300 text-center h-full hover:bg-green-500/10 cursor-pointer">
                                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <contact.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                            {contact.title}
                                        </h3>
                                        <p className="text-xl text-cyan-400 font-semibold mb-4 break-words whitespace-normal">
                                            {contact.info}
                                        </p>
                                        <p className="text-gray-300 leading-relaxed break-words whitespace-normal">
                                            {contact.description}
                                        </p>
                                    </div>
                                </a>
                            ) : (
                                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center h-full">
                                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <contact.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                        {contact.title}
                                    </h3>
                                    <p className="text-xl text-cyan-400 font-semibold mb-4 break-words whitespace-normal">
                                        {contact.info}
                                    </p>
                                    <p className="text-gray-300 leading-relaxed break-words whitespace-normal">
                                        {contact.description}
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <form ref={formRef} onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-white font-semibold mb-2">Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div>
                                <label className="block text-white font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-white font-semibold mb-2">Teléfono</label>
                                <input
                                    type="tel"
                                    name="user_phone"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                                    placeholder="+57 (313) xxxxxxx"
                                />
                            </div>

                            <div>
                                <label className="block text-white font-semibold mb-2">Mensaje</label>
                                <textarea
                                    name="title"
                                    required
                                    rows="5"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 resize-none"
                                    placeholder="Cuéntanos cómo podemos ayudarte"
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                disabled={loading}
                                size="lg"
                                className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                            >
                                {loading ? "Enviando..." : "Enviar Mensaje"}
                            </Button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;