"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/servicios", label: "Servicios" },
        { href: "/proyectos", label: "Proyectos" },
        { href: "/sobre-mi", label: "Sobre mí" },
        { href: "/contacto", label: "Contacto" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "backdrop-blur-lg bg-slate-900/90 border-b border-white/20 shadow-lg"
                        : "backdrop-blur-md bg-slate-900/30 border-b border-white/5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                        {/* LOGO */}
                        <Link href="/" className="flex items-center gap-3 group">
                            {/* 
                TODO: Reemplaza el siguiente div con tu logo PNG
                Ejemplo:
                <Image 
                  src="/logo.png" 
                  alt="Creapp-Tech Logo" 
                  width={40} 
                  height={40}
                  className="transition-transform group-hover:scale-110"
                />
              */}
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-white transition-transform group-hover:scale-110">
                                C
                            </div>
                            <span className="font-bold text-xl text-white hidden sm:block">
                                Creapp-Tech
                            </span>
                        </Link>

                        {/* DESKTOP MENU */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="relative text-gray-300 hover:text-white transition-colors group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                                </Link>
                            ))}
                        </div>

                        {/* HAMBURGER BUTTON (Mobile) */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <motion.span
                                    animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-0.5 bg-white rounded-full"
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-0.5 bg-white rounded-full"
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-0.5 bg-white rounded-full"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-16 right-0 bottom-0 w-full sm:w-80 bg-slate-900/95 backdrop-blur-xl border-l border-white/10 z-40 md:hidden"
                    >
                        <div className="flex flex-col p-6 gap-2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* CTA Button in Mobile Menu */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                                className="mt-6"
                            >
                                <Link
                                    href="/contacto"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                                >
                                    Contactar
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* OVERLAY (Mobile Menu) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
                    />
                )}
            </AnimatePresence>
        </>
    );
}
