"use client";

import { motion } from "framer-motion";
import ServiceCategory from "@/components/ServiceCategory";
import ServiceCard from "@/components/ServiceCard";
import HostingerServices from "@/components/HostingerServices";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-x-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.2, 1],
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
                <section className="pt-32 pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Soluciones Tecnológicas{" "}
                                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    para tu Empresa
                                </span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                                Transformamos tu negocio con{" "}
                                <span className="text-white font-semibold">
                                    automatización empresarial
                                </span>
                                ,{" "}
                                <span className="text-white font-semibold">desarrollo web</span>{" "}
                                y{" "}
                                <span className="text-white font-semibold">
                                    soluciones digitales
                                </span>{" "}
                                personalizadas para Colombia y Latinoamérica.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="https://wa.me/573181805585?text=Hola,%20quiero%20información%20sobre%20sus%20servicios">
                                    <motion.button
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30"
                                    >
                                        Consultoría Gratuita
                                    </motion.button>
                                </a>
                                <Link href="#servicios">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm"
                                    >
                                        Ver Servicios
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Services Sections */}
                <div id="servicios" className="space-y-8">
                    {/* Automatización & Productividad */}
                    <ServiceCategory
                        title="Automatización & Productividad"
                        description="Elimina tareas repetitivas y optimiza procesos con automatizaciones inteligentes"
                        icon="🚀"
                    >
                        <ServiceCard
                            icon={<span className="text-2xl">⚡</span>}
                            title="Automatización con n8n"
                            description="Implementamos flujos de trabajo personalizados que conectan tus sistemas y eliminan procesos manuales."
                            benefits={[
                                "Reducción de 80% en tiempo de procesos",
                                "Integración con +300 aplicaciones",
                                "Escalabilidad garantizada",
                                "Hosting VPS optimizado disponible",
                            ]}
                            ctaText="Automatizar mi negocio"
                            ctaLink="https://wa.me/573181805585?text=Quiero%20automatizar%20con%20n8n"
                            delay={0}
                        />
                        <ServiceCard
                            icon={<span className="text-2xl">🔗</span>}
                            title="Integraciones entre Sistemas"
                            description="Conectamos tus herramientas empresariales en un ecosistema unificado."
                            benefits={[
                                "Sincronización automática de datos",
                                "Eliminación de silos de información",
                                "Integración CRM, ERP, contabilidad",
                                "Centralización de información",
                            ]}
                            ctaText="Integrar sistemas"
                            ctaLink="https://wa.me/573181805585?text=Necesito%20integrar%20mis%20sistemas"
                            delay={0.1}
                        />
                        <ServiceCard
                            icon={<span className="text-2xl">🤖</span>}
                            title="Chatbots con IA"
                            description="Asistentes inteligentes con Gemini, GPT y n8n para atención 24/7."
                            benefits={[
                                "Respuestas instantáneas en español",
                                "WhatsApp, Telegram, web",
                                "Aprendizaje continuo",
                                "Reducción de costos operativos",
                            ]}
                            ctaText="Crear chatbot"
                            ctaLink="https://wa.me/573181805585?text=Quiero%20un%20chatbot%20con%20IA"
                            delay={0.2}
                        />
                        <ServiceCard
                            icon={<span className="text-2xl">📊</span>}
                            title="Optimización de Excel"
                            description="Transformamos hojas de cálculo en dashboards interactivos y automatizados."
                            benefits={[
                                "Macros y automatizaciones VBA",
                                "Limpieza de grandes volúmenes",
                                "Integración con Power BI",
                                "Migración a sistemas web",
                            ]}
                            ctaText="Optimizar Excel"
                            ctaLink="https://wa.me/573181805585?text=Necesito%20optimizar%20Excel"
                            delay={0.3}
                        />
                    </ServiceCategory>

                    {/* Desarrollo Web & SaaS */}
                    <ServiceCategory
                        title="Desarrollo Web & SaaS"
                        description="Aplicaciones web modernas, rápidas y escalables con las mejores tecnologías"
                        icon="💻"
                    >
                        <ServiceCard
                            icon={<span className="text-2xl">🌐</span>}
                            title="Aplicaciones Web"
                            description="Desarrollo con Next.js, React y Node.js. Rápidas, seguras y optimizadas para SEO."
                            benefits={[
                                "Desarrollo ágil en sprints",
                                "Código limpio y documentado",
                                "Diseño responsive",
                                "Optimización SEO incluida",
                            ]}
                            ctaText="Cotizar proyecto"
                            ctaLink="https://wa.me/573181805585?text=Quiero%20desarrollar%20una%20aplicación%20web"
                            delay={0}
                        />
                        <ServiceCard
                            icon={<span className="text-2xl">🔌</span>}
                            title="Microservicios y APIs"
                            description="Arquitecturas escalables con APIs REST/GraphQL para sistemas empresariales."
                            benefits={[
                                "Escalabilidad horizontal",
                                "Mantenimiento simplificado",
                                "Integraciones con terceros",
                                "Documentación completa",
                            ]}
                            ctaText="Desarrollar API"
                            ctaLink="https://wa.me/573181805585?text=Necesito%20una%20API%20personalizada"
                            delay={0.1}
                        />
                        <ServiceCard
                            icon={<span className="text-2xl">☁️</span>}
                            title="Sistemas SaaS"
                            description="Plataformas completas multi-tenant con suscripciones y facturación integrada."
                            benefits={[
                                "Multi-tenancy nativo",
                                "Sistema de suscripciones",
                                "Dashboards personalizables",
                                "Seguridad empresarial",
                            ]}
                            ctaText="Crear SaaS"
                            ctaLink="https://wa.me/573181805585?text=Quiero%20desarrollar%20un%20SaaS"
                            delay={0.2}
                        />
                        <ServiceCard
                            icon={<span className="text-2xl">⚙️</span>}
                            title="No-Code / Low-Code"
                            description="Soluciones rápidas con AppSheet para validar ideas sin grandes inversiones."
                            benefits={[
                                "Desarrollo 5x más rápido",
                                "Costos reducidos para MVPs",
                                "Fácil mantenimiento",
                                "Migración a código cuando sea necesario",
                            ]}
                            ctaText="Explorar no-code"
                            ctaLink="https://wa.me/573181805585?text=Me%20interesa%20una%20solución%20no-code"
                            delay={0.3}
                        />
                    </ServiceCategory>

                    {/* Sistemas de Gestión */}
                    <ServiceCategory
                        title="Sistemas de Gestión Organizacional"
                        description="Digitaliza tus procesos de calidad, seguridad y control empresarial"
                        icon="📊"
                    >
                        <ServiceCard
                            icon={<span className="text-2xl">✅</span>}
                            title="ISO 9001 Digital"
                            description="Sistema de gestión de calidad digitalizado con trazabilidad completa."
                            benefits={[
                                "Auditorías simplificadas",
                                "Control de documentos digital",
                                "Cumplimiento normativo",
                                "Dashboards de indicadores",
                            ]}
                            ctaText="Implementar ISO"
                            ctaLink="https://wa.me/573181805585?text=Necesito%20ISO%209001%20digital"
                            delay={0}
                        />
                        <ServiceCard
                            icon={<span className="text-2xl">🦺</span>}
                            title="SG-SST Digital"
                            description="Gestión de seguridad y salud en el trabajo conforme a normativa colombiana."
                            benefits={[
                                "Matriz de riesgos digital",
                                "Registro de incidentes",
                                "Control de capacitaciones",
                                "Reportes automáticos ARL",
                            ]}
                            ctaText="Implementar SG-SST"
                            ctaLink="https://wa.me/573181805585?text=Quiero%20SG-SST%20digital"
                            delay={0.1}
                        />
                        <ServiceCard
                            icon={<span className="text-2xl">🏗️</span>}
                            title="Sistemas para Construcción"
                            description="Gestión integral de proyectos, materiales, maquinaria y costos."
                            benefits={[
                                "Gestión de proyectos y cronogramas",
                                "Control de materiales",
                                "Seguimiento de maquinaria",
                                "Costos por proyecto",
                            ]}
                            ctaText="Solicitar demo"
                            ctaLink="https://wa.me/573181805585?text=Necesito%20sistema%20para%20construcción"
                            delay={0.2}
                        />
                        <ServiceCard
                            icon={<span className="text-2xl">📈</span>}
                            title="Dashboards Power BI"
                            description="Visualización en tiempo real de KPIs críticos conectados a tus datos."
                            benefits={[
                                "Conexión a múltiples fuentes",
                                "Actualización en tiempo real",
                                "Análisis de ventas y rentabilidad",
                                "Métricas personalizadas",
                            ]}
                            ctaText="Crear dashboard"
                            ctaLink="https://wa.me/573181805585?text=Quiero%20un%20dashboard%20Power%20BI"
                            delay={0.3}
                        />
                    </ServiceCategory>

                    {/* Gestión Operativa & Logística */}
                    <ServiceCategory
                        title="Gestión Operativa & Logística"
                        description="Control total de operaciones, inventarios y logística empresarial"
                        icon="🚛"
                    >
                        <ServiceCard
                            icon={<span className="text-2xl">📦</span>}
                            title="Creapp Logistic"
                            description="Plataforma SaaS completa para gestión logística, producción e inventarios."
                            benefits={[
                                "Control de producción en tiempo real",
                                "Gestión de inventarios y alertas",
                                "Seguimiento de maquinaria",
                                "Registro de cargue/descargue",
                            ]}
                            ctaText="Agendar demo"
                            ctaLink="https://wa.me/573181805585?text=Quiero%20una%20demo%20de%20Creapp%20Logistic"
                            delay={0}
                        />
                        <ServiceCard
                            icon={<span className="text-2xl">🏭</span>}
                            title="Control de Producción"
                            description="Seguimiento de órdenes, tiempos, recursos y eficiencia productiva."
                            benefits={[
                                "Registro de órdenes de producción",
                                "Seguimiento de estados",
                                "Asignación de recursos",
                                "Reportes de eficiencia",
                            ]}
                            ctaText="Implementar control"
                            ctaLink="https://wa.me/573181805585?text=Necesito%20control%20de%20producción"
                            delay={0.1}
                        />
                        <ServiceCard
                            icon={<span className="text-2xl">📋</span>}
                            title="Gestión de Inventarios"
                            description="Control de stock, trazabilidad de lotes y alertas de reorden automáticas."
                            benefits={[
                                "Stock en tiempo real",
                                "Alertas de punto de reorden",
                                "Trazabilidad completa",
                                "Inventarios cíclicos",
                            ]}
                            ctaText="Gestionar inventario"
                            ctaLink="https://wa.me/573181805585?text=Quiero%20gestionar%20inventarios"
                            delay={0.2}
                        />
                        <ServiceCard
                            icon={<span className="text-2xl">💰</span>}
                            title="Control de Costos"
                            description="Análisis de costos operativos, rentabilidad por servicio y desviaciones."
                            benefits={[
                                "Costos por ruta y vehículo",
                                "Gastos de combustible",
                                "Rentabilidad por servicio",
                                "Análisis de desviaciones",
                            ]}
                            ctaText="Controlar costos"
                            ctaLink="https://wa.me/573181805585?text=Necesito%20control%20de%20costos"
                            delay={0.3}
                        />
                    </ServiceCategory>

                    {/* Branding */}
                    <ServiceCategory
                        title="Branding & Imagen Corporativa"
                        description="Diseño de identidad visual que refleja los valores de tu marca"
                        icon="🎨"
                    >
                        <ServiceCard
                            icon={<span className="text-2xl">🎯</span>}
                            title="Identidad Visual"
                            description="Diseño completo de logotipo, paleta de colores y tipografías corporativas."
                            benefits={[
                                "Diseño de logotipo profesional",
                                "Paleta de colores estratégica",
                                "Tipografías oficiales",
                                "Aplicaciones en papelería",
                            ]}
                            ctaText="Crear identidad"
                            ctaLink="https://wa.me/573181805585?text=Quiero%20diseñar%20mi%20identidad%20visual"
                            delay={0}
                        />
                        <ServiceCard
                            icon={<span className="text-2xl">📘</span>}
                            title="Manual de Marca"
                            description="Documentación completa para garantizar coherencia visual en todas las comunicaciones."
                            benefits={[
                                "Guía de uso de logotipo",
                                "Especificaciones de color",
                                "Aplicaciones correctas",
                                "Ejemplos de uso",
                            ]}
                            ctaText="Crear manual"
                            ctaLink="https://wa.me/573181805585?text=Necesito%20un%20manual%20de%20marca"
                            delay={0.1}
                        />
                        <ServiceCard
                            icon={<span className="text-2xl">📄</span>}
                            title="Plantillas Empresariales"
                            description="Diseño de presentaciones, propuestas y documentos corporativos profesionales."
                            benefits={[
                                "Plantillas PowerPoint/Google Slides",
                                "Propuestas comerciales",
                                "Informes corporativos",
                                "Documentos oficiales",
                            ]}
                            ctaText="Diseñar plantillas"
                            ctaLink="https://wa.me/573181805585?text=Quiero%20plantillas%20empresariales"
                            delay={0.2}
                        />
                        <ServiceCard
                            icon={<span className="text-2xl">📱</span>}
                            title="Redes Sociales"
                            description="Perfiles optimizados y plantillas de contenido para fortalecer tu presencia digital."
                            benefits={[
                                "Diseño de perfiles profesionales",
                                "Plantillas de contenido",
                                "Guía de estilo visual",
                                "Banners y portadas",
                            ]}
                            ctaText="Optimizar redes"
                            ctaLink="https://wa.me/573181805585?text=Quiero%20optimizar%20mis%20redes%20sociales"
                            delay={0.3}
                        />
                    </ServiceCategory>

                    {/* Hosting Services */}
                    <HostingerServices />
                </div>

                {/* Why Choose Us */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                ¿Por Qué Elegir CreappTech?
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: "✅",
                                    title: "Experiencia Comprobada",
                                    desc: "Más de 50 proyectos exitosos en Colombia y Latinoamérica",
                                },
                                {
                                    icon: "🎯",
                                    title: "Soluciones Personalizadas",
                                    desc: "Cada solución diseñada específicamente para tu negocio",
                                },
                                {
                                    icon: "🚀",
                                    title: "Tecnología de Vanguardia",
                                    desc: "Next.js, React, n8n, Google Cloud, AWS",
                                },
                                {
                                    icon: "📈",
                                    title: "Escalabilidad Garantizada",
                                    desc: "Nuestras soluciones crecen contigo",
                                },
                                {
                                    icon: "🇨🇴",
                                    title: "Soporte en Español",
                                    desc: "Atención personalizada en tu idioma",
                                },
                                {
                                    icon: "💰",
                                    title: "Precios Competitivos",
                                    desc: "Tarifas justas y transparentes",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 text-center"
                                >
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="backdrop-blur-md bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-3xl p-8 sm:p-12 text-center"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Comienza tu Transformación Digital Hoy
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Primera consultoría gratuita. Conversemos sobre tus desafíos
                                empresariales.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="https://wa.me/573181805585?text=Hola,%20quiero%20una%20consultoría%20gratuita">
                                    <motion.button
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30"
                                    >
                                        📞 WhatsApp: +57 318 180 5585
                                    </motion.button>
                                </a>
                                <a href="mailto:creapp2024@gmail.com">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm"
                                    >
                                        📧 creapp2024@gmail.com
                                    </motion.button>
                                </a>
                            </div>

                            <p className="text-gray-400 text-sm mt-6">
                                📍 Bogotá, Colombia - Servicio a toda Latinoamérica
                            </p>
                        </motion.div>
                    </div>
                </section>
            </div>
        </main>
    );
}
