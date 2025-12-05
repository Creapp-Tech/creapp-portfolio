"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
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
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                                    Hola, soy{" "}
                                    <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                        John
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-300 mb-6">
                                    Fundador de{" "}
                                    <span className="text-white font-semibold">
                                        CreappTech
                                    </span>
                                </p>
                                <p className="text-lg text-gray-400">
                                    Una startup creada con un propósito claro: ayudar a las
                                    pymes a digitalizarse y crecer de manera inteligente,
                                    práctica y accesible.
                                </p>
                            </motion.div>

                            {/* Profile Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex justify-center lg:justify-end"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-30" />
                                    <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-2">
                                        <Image
                                            src="/john-profile.png"
                                            alt="John - Fundador de CreappTech"
                                            width={400}
                                            height={400}
                                            className="rounded-xl"
                                            priority
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-8">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12"
                        >
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Mi Historia
                            </h2>
                            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                                <p>
                                    Trabajo cada proyecto de forma{" "}
                                    <span className="text-white font-semibold">
                                        directa y personalizada
                                    </span>
                                    , combinando análisis, diseño y tecnología para
                                    transformar procesos que hoy consumen tiempo y
                                    convertirlos en soluciones eficientes que generan valor
                                    real.
                                </p>
                                <p>
                                    Mi enfoque está en crear herramientas que hagan la vida
                                    más fácil: desde sistemas de gestión ISO,
                                    automatizaciones, tableros de control y herramientas
                                    digitales, hasta desarrollo web con Next.js, aplicaciones
                                    con AppSheet, integración de APIs y acompañamiento en
                                    branding y presencia digital.
                                </p>
                                <p className="text-cyan-300 font-medium italic">
                                    "Creo en la tecnología como un medio, no como un fin."
                                </p>
                                <p>
                                    Por eso, cuando trabajo contigo, no solo construyo una
                                    solución: te escucho, entiendo tu negocio y diseño una
                                    herramienta que realmente funcione para tu día a día.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-8"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Cómo Trabajo
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: "🎯",
                                    title: "Dedicación Total",
                                    desc: "Trabajo solo, con dedicación completa a cada proyecto, apoyándome en mi experiencia y mentalidad de crecimiento constante.",
                                },
                                {
                                    icon: "💡",
                                    title: "Soluciones Prácticas",
                                    desc: "Propongo soluciones simples y efectivas que realmente funcionan para tu negocio, sin complicaciones innecesarias.",
                                },
                                {
                                    icon: "🤝",
                                    title: "Comunicación Clara",
                                    desc: "Te hablo claro, te escucho y te guío en cada paso del proceso de transformación digital.",
                                },
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 text-center"
                                >
                                    <div className="text-5xl mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-300">{value.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="py-8">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8"
                        >
                            <h2 className="text-3xl font-bold text-white mb-6 text-center">
                                Mis Herramientas
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    "Next.js",
                                    "React",
                                    "Node.js",
                                    "AppSheet",
                                    "n8n",
                                    "Power BI",
                                    "APIs",
                                    "ISO 9001",
                                    "Google Cloud",
                                    "PostgreSQL",
                                    "Prisma",
                                    "Branding",
                                ].map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="backdrop-blur-md bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-lg p-3 text-center"
                                    >
                                        <span className="text-white font-medium">
                                            {skill}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-8">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="backdrop-blur-md bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-2xl p-8 sm:p-12 text-center"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                Mi Propósito
                            </h2>
                            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                                Cada proyecto que realizo es una oportunidad para{" "}
                                <span className="text-white font-semibold">servir</span>,{" "}
                                <span className="text-white font-semibold">aprender</span> y{" "}
                                <span className="text-white font-semibold">
                                    dejar una marca positiva
                                </span>
                                .
                            </p>
                            <p className="text-lg text-gray-400 mb-8">
                                Si buscas alguien que te guíe, te hable claro, te proponga
                                soluciones simples y que te ayude a llevar tu empresa al
                                siguiente nivel, aquí estoy para acompañarte.
                            </p>
                            <div className="inline-block">
                                <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    Bienvenido a CreappTech
                                </p>
                                <p className="text-gray-300 mt-2">
                                    Donde tus ideas se convierten en herramientas reales
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-8">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6">
                                ¿Listo para transformar tu negocio?
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="https://wa.me/573181805585?text=Hola%20John,%20quiero%20conocer%20más%20sobre%20CreappTech">
                                    <motion.button
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30"
                                    >
                                        📱 Conversemos por WhatsApp
                                    </motion.button>
                                </a>
                                <a href="/servicios">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm"
                                    >
                                        Ver Servicios
                                    </motion.button>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </main>
    );
}
