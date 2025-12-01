"use client";

import { motion } from "framer-motion";

interface HostingerServiceProps {
    title: string;
    description: string;
    price: string;
    features: string[];
    ctaText: string;
    affiliateLink: string;
    popular?: boolean;
}

function HostingerServiceCard({
    title,
    description,
    price,
    features,
    ctaText,
    affiliateLink,
    popular = false,
}: HostingerServiceProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`relative backdrop-blur-md rounded-2xl p-6 shadow-xl transition-all duration-300 ${popular
                    ? "bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-400/40"
                    : "bg-white/5 border border-white/10 hover:border-blue-400/30"
                }`}
        >
            {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full">
                        MÁS POPULAR
                    </span>
                </div>
            )}

            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm mb-4">{description}</p>
                <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {price}
                    </span>
                    <span className="text-gray-400 text-sm">/mes</span>
                </div>
            </div>

            <ul className="space-y-3 mb-6">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-cyan-400 mt-0.5">✓</span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="block">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 font-semibold rounded-lg transition-all ${popular
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                            : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white"
                        }`}
                >
                    {ctaText}
                </motion.button>
            </a>
        </motion.div>
    );
}

export default function HostingerServices() {
    const services = [
        {
            title: "Hosting Web",
            description: "Ideal para sitios corporativos y blogs",
            price: "$2.99",
            features: [
                "Uptime 99.9% garantizado",
                "Certificado SSL gratuito",
                "Migración gratuita",
                "Panel cPanel intuitivo",
                "Soporte 24/7 en español",
            ],
            ctaText: "Ver Planes",
            affiliateLink: "HOSTINGER_AFFILIATE_LINK_HOSTING",
            popular: false,
        },
        {
            title: "Hosting VPS",
            description: "Recursos dedicados para aplicaciones",
            price: "$4.99",
            features: [
                "Recursos dedicados",
                "Acceso root completo",
                "IPv6 incluido",
                "Snapshots automáticos",
                "Ideal para n8n y apps web",
            ],
            ctaText: "Contratar VPS",
            affiliateLink: "HOSTINGER_AFFILIATE_LINK_VPS",
            popular: true,
        },
        {
            title: "Google Workspace",
            description: "Suite empresarial completa",
            price: "$6.00",
            features: [
                "Gmail con tu dominio",
                "30GB - 5TB en Drive",
                "Meet, Calendar, Docs",
                "Seguridad empresarial",
                "Soporte de Google 24/7",
            ],
            ctaText: "Activar Workspace",
            affiliateLink: "HOSTINGER_AFFILIATE_LINK_WORKSPACE",
            popular: false,
        },
    ];

    return (
        <section className="py-16 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-4xl">🌐</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Hosting & Dominio
                        </h2>
                    </div>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-4">
                        Servicios de hosting profesional con servidores optimizados y soporte en español
                    </p>
                    <p className="text-sm text-gray-400">
                        <span className="text-blue-400">💡 Nota:</span> Estos servicios son provistos por Hostinger a través de nuestro programa de afiliados
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <HostingerServiceCard key={index} {...service} />
                    ))}
                </div>

                {/* Additional Services */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                        Servicios Adicionales
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">🌍</span>
                            <div>
                                <h4 className="text-white font-semibold mb-1">Registro de Dominios</h4>
                                <p className="text-gray-400 text-sm mb-2">
                                    Desde $9.99/año - .com, .co, .com.co y más
                                </p>
                                <a
                                    href="HOSTINGER_AFFILIATE_LINK_DOMAIN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                                >
                                    Buscar dominio →
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-2xl">📧</span>
                            <div>
                                <h4 className="text-white font-semibold mb-1">Correo Empresarial</h4>
                                <p className="text-gray-400 text-sm mb-2">
                                    Email profesional con tu dominio desde $0.99/mes
                                </p>
                                <a
                                    href="HOSTINGER_AFFILIATE_LINK_EMAIL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                                >
                                    Configurar email →
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-2xl">⚙️</span>
                            <div>
                                <h4 className="text-white font-semibold mb-1">VPS para n8n</h4>
                                <p className="text-gray-400 text-sm mb-2">
                                    Servidor optimizado con instalación y configuración incluida
                                </p>
                                <a
                                    href="https://wa.me/573181805585?text=Hola,%20me%20interesa%20el%20VPS%20para%20n8n"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                                >
                                    Consultar →
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-2xl">🔒</span>
                            <div>
                                <h4 className="text-white font-semibold mb-1">SSL & Seguridad</h4>
                                <p className="text-gray-400 text-sm mb-2">
                                    Certificados SSL, backups y protección DDoS
                                </p>
                                <a
                                    href="HOSTINGER_AFFILIATE_LINK_HOSTING"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                                >
                                    Ver opciones →
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
