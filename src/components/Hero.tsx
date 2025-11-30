"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const words = ["Desarrollo Web", "Automatizaciones", "n8n Workflows", "Sistemas ISO", "SaaS & Integraciones"];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">

            {/* ANIMATED GRADIENT BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"
                />
            </div>

            {/* GRID PATTERN OVERLAY */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

            {/* FLOATING SHAPES WITH BLUR */}
            <motion.div
                className="absolute top-20 left-[10%] w-40 h-40 rounded-full bg-gradient-to-br from-blue-400/10 to-cyan-400/10 backdrop-blur-sm"
                animate={{
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute bottom-32 right-[15%] w-32 h-32 bg-gradient-to-br from-purple-400/10 to-blue-400/10 backdrop-blur-sm rotate-45"
                animate={{
                    x: [0, -25, 0],
                    y: [0, 25, 0],
                    rotate: [45, 135, 45]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute top-1/2 right-[8%] w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-400/10 backdrop-blur-sm"
                animate={{
                    x: [0, 20, 0],
                    y: [0, -40, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            {/* MAIN CONTENT */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* GLASSMORPHISM CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl"
                >

                    {/* BADGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-sm font-medium text-blue-300">Disponible para proyectos</span>
                    </motion.div>

                    {/* MAIN TITLE */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Tecnología sencilla.{" "}
                        <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                            Impacto real.
                        </span>
                    </motion.h1>

                    {/* SUBTEXT */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
                    >
                        Transformo procesos de pymes con soluciones digitales inteligentes:
                        <span className="text-white font-medium"> rápidas, claras y hechas a la medida.</span>
                    </motion.p>

                    {/* CHANGING WORDS SECTION */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mb-12"
                    >
                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">Especializado en</p>
                        <div className="h-16 flex items-center">
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                                transition={{ duration: 0.5 }}
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                            >
                                {words[index]}
                            </motion.span>
                        </div>
                    </motion.div>

                    {/* CTA BUTTONS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link href="/contacto">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-blue-500/30 transition-all"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Hablemos de tu proyecto
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        →
                                    </motion.span>
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"
                                    initial={{ x: "100%" }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>
                        </Link>

                        <Link href="/proyectos">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all"
                            >
                                Ver proyectos
                            </motion.button>
                        </Link>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
