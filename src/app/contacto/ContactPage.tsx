"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Create WhatsApp message with form data
        const whatsappMessage = `Hola, soy ${formData.name}%0A%0AEmail: ${formData.email}%0ATeléfono: ${formData.phone}%0A%0AMensaje: ${formData.message}`;
        window.open(
            `https://wa.me/573181805585?text=${whatsappMessage}`,
            "_blank"
        );
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-x-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"
                />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

            {/* Content */}
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="pt-24 pb-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Hablemos de tu{" "}
                                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    Proyecto Digital
                                </span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Estamos listos para ayudarte a transformar tu negocio.
                                Contáctanos y recibe una{" "}
                                <span className="text-white font-semibold">
                                    consultoría gratuita
                                </span>
                                .
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8"
                            >
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    Envíanos un Mensaje
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                        >
                                            Nombre Completo *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="Tu nombre"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                        >
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="tu@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                        >
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="+57 300 123 4567"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                        >
                                            Mensaje *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                            placeholder="Cuéntanos sobre tu proyecto..."
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        whileHover={{
                                            scale: 1.02,
                                            boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30"
                                    >
                                        📱 Enviar por WhatsApp
                                    </motion.button>
                                </form>
                            </motion.div>

                            {/* Contact Information */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="space-y-6"
                            >
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    Información de Contacto
                                </h2>

                                {/* Contact Cards */}
                                <div className="space-y-4">
                                    {/* WhatsApp */}
                                    <motion.a
                                        href="https://wa.me/573181805585"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="block backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="text-4xl">📱</div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-white mb-1">
                                                    WhatsApp
                                                </h3>
                                                <p className="text-gray-300">
                                                    +57 318 180 5585
                                                </p>
                                                <p className="text-sm text-gray-400 mt-1">
                                                    Lun - Vie: 8:00 AM - 6:00 PM
                                                </p>
                                            </div>
                                        </div>
                                    </motion.a>

                                    {/* Email */}
                                    <motion.a
                                        href="mailto:creapp2024@gmail.com"
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="block backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="text-4xl">📧</div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-white mb-1">
                                                    Email
                                                </h3>
                                                <p className="text-gray-300">
                                                    creapp2024@gmail.com
                                                </p>
                                                <p className="text-sm text-gray-400 mt-1">
                                                    Respuesta en 24 horas
                                                </p>
                                            </div>
                                        </div>
                                    </motion.a>

                                    {/* Location */}
                                    <motion.div
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="block backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="text-4xl">📍</div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-white mb-1">
                                                    Ubicación
                                                </h3>
                                                <p className="text-gray-300">
                                                    Bogotá, Colombia
                                                </p>
                                                <p className="text-sm text-gray-400 mt-1">
                                                    Servicio a toda Latinoamérica
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Why Contact Us */}
                                <div className="backdrop-blur-md bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-2xl p-6 mt-8">
                                    <h3 className="text-xl font-bold text-white mb-4">
                                        ¿Por qué contactarnos?
                                    </h3>
                                    <ul className="space-y-3 text-gray-300">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">✓</span>
                                            <span>Consultoría inicial gratuita</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">✓</span>
                                            <span>Respuesta rápida en menos de 24h</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">✓</span>
                                            <span>Presupuesto sin compromiso</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">✓</span>
                                            <span>Atención personalizada en español</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-8">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-8"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Preguntas Frecuentes
                            </h2>
                        </motion.div>

                        <div className="space-y-4">
                            {[
                                {
                                    q: "¿Cuánto tiempo toma desarrollar un proyecto?",
                                    a: "Depende de la complejidad. Un sitio web simple puede estar listo en 2-3 semanas, mientras que un sistema completo puede tomar 2-3 meses.",
                                },
                                {
                                    q: "¿Ofrecen soporte después de la entrega?",
                                    a: "Sí, todos nuestros proyectos incluyen soporte técnico. Ofrecemos planes de mantenimiento mensuales adaptados a tus necesidades.",
                                },
                                {
                                    q: "¿Trabajan con empresas fuera de Colombia?",
                                    a: "¡Por supuesto! Trabajamos con clientes en toda Latinoamérica de forma remota con total normalidad.",
                                },
                                {
                                    q: "¿Cuál es el costo de sus servicios?",
                                    a: "Cada proyecto es único. Contáctanos para una consultoría gratuita y te daremos un presupuesto personalizado sin compromiso.",
                                },
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6"
                                >
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {faq.q}
                                    </h3>
                                    <p className="text-gray-300">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
