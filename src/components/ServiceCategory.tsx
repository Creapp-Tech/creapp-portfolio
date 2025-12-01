"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCategoryProps {
    title: string;
    description: string;
    icon: string;
    children: ReactNode;
}

export default function ServiceCategory({
    title,
    description,
    icon,
    children,
}: ServiceCategoryProps) {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Category Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-4xl">{icon}</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            {title}
                        </h2>
                    </div>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        {description}
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {children}
                </div>
            </div>
        </section>
    );
}
