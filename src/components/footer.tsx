"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://linkedin.com/company/creapp-tech", // TODO: Reemplaza con tu URL de LinkedIn
            icon: Linkedin,
            color: "hover:text-blue-400"
        },
        {
            name: "Instagram",
            href: "https://instagram.com/creapptech", // TODO: Reemplaza con tu URL de Instagram
            icon: Instagram,
            color: "hover:text-pink-400"
        },
        {
            name: "Facebook",
            href: "https://facebook.com/creapptech", // TODO: Reemplaza con tu URL de Facebook
            icon: Facebook,
            color: "hover:text-blue-500"
        },
    ];

    const quickLinks = [
        { label: "Servicios", href: "/servicios" },
        { label: "Proyectos", href: "/proyectos" },
        { label: "Sobre mí", href: "/sobre-mi" },
        { label: "Contacto", href: "/contacto" },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-white/10 mt-8">

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

                {/* MAIN FOOTER CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

                    {/* COLUMN 1: BRAND */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block group">
                            <div className="flex items-center gap-3">
                                {/* Logo placeholder - reemplaza con tu logo */}
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-white transition-transform group-hover:scale-110">
                                    C
                                </div>
                                <span className="font-bold text-xl text-white">Creapp-Tech</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Soluciones tecnológicas simples, rápidas y diseñadas para pymes.
                        </p>

                        {/* SOCIAL LINKS */}
                        <div className="flex gap-3 pt-2">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all`}
                                    aria-label={social.name}
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* COLUMN 2: QUICK LINKS */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-px bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-4 transition-all duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 3: CONTACT INFO */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Contacto</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3 text-gray-400">
                                <Mail size={18} className="mt-0.5 text-blue-400 flex-shrink-0" />
                                <a href="mailto:info@creapp-tech.com" className="hover:text-white transition-colors">
                                    info@creapp-tech.com {/* TODO: Reemplaza con tu email */}
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <Phone size={18} className="mt-0.5 text-cyan-400 flex-shrink-0" />
                                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                                    +1 (234) 567-890 {/* TODO: Reemplaza con tu teléfono */}
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin size={18} className="mt-0.5 text-purple-400 flex-shrink-0" />
                                <span>
                                    Tu Ciudad, País {/* TODO: Reemplaza con tu ubicación */}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* COLUMN 4: NEWSLETTER */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Recibe las últimas novedades y tips tecnológicos.
                        </p>
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                            >
                                Suscribirse
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* BOTTOM BAR */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                    <p>
                        © {currentYear} <span className="text-white font-medium">Creapp-Tech</span>. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacidad" className="hover:text-white transition-colors">
                            Privacidad
                        </Link>
                        <Link href="/terminos" className="hover:text-white transition-colors">
                            Términos
                        </Link>
                    </div>
                </div>
            </div>

            {/* BOTTOM GRADIENT ACCENT */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500" />
        </footer>
    );
}
