"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ComingSoonPage() {
    return (
        <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-x-hidden flex items-center justify-center">
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
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Animated Icon */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="text-8xl sm:text-9xl"
                    >
                        🚀
                    </motion.div>
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Proyectos{" "}
                        <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Próximamente
                        </span>
                    </h1>
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 mb-8"
                >
                    <p className="text-xl text-gray-300 mb-6">
                        Estamos preparando un portafolio increíble con nuestros proyectos
                        más destacados.
                    </p>
                    <p className="text-lg text-gray-400">
                        Mientras tanto, puedes conocer nuestros servicios o contactarnos
                        directamente para hablar sobre tu proyecto.
                    </p>
                </motion.div>

                {/* Loading Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-8"
                >
                    <div className="flex justify-center gap-2">
                        {[0, 1, 2].map((index) => (
                            <motion.div
                                key={index}
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: index * 0.2,
                                }}
                                className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                            />
                        ))}
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link href="/servicios">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30"
                        >
                            Ver Servicios
                        </motion.button>
                    </Link>
                    <a href="https://wa.me/573181805585?text=Hola,%20quiero%20información%20sobre%20sus%20proyectos">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm"
                        >
                            📱 Contáctanos
                        </motion.button>
                    </a>
                </motion.div>

                {/* Features Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {[
                        { icon: "💼", text: "Casos de Éxito" },
                        { icon: "🎯", text: "Soluciones Reales" },
                        { icon: "📊", text: "Resultados Medibles" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6"
                        >
                            <div className="text-4xl mb-2">{item.icon}</div>
                            <p className="text-white font-medium">{item.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </main>
    );
}
