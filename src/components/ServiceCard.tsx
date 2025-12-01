"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    benefits: string[];
    ctaText?: string;
    ctaLink?: string;
    delay?: number;
}

export default function ServiceCard({
    icon,
    title,
    description,
    benefits,
    ctaText,
    ctaLink,
    delay = 0,
}: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative backdrop-blur-md bg-white/5 border border-white/10 hover:border-blue-400/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
                {/* Icon */}
                <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400 border border-blue-400/20"
                >
                    {icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

                {/* Benefits */}
                {benefits.length > 0 && (
                    <ul className="space-y-2 mb-6">
                        {benefits.map((benefit, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: delay + index * 0.1 }}
                                className="flex items-start gap-2 text-sm text-gray-400"
                            >
                                <span className="text-cyan-400 mt-1">✓</span>
                                <span>{benefit}</span>
                            </motion.li>
                        ))}
                    </ul>
                )}

                {/* CTA Button */}
                {ctaText && ctaLink && (
                    <a href={ctaLink} className="inline-block">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                        >
                            {ctaText}
                        </motion.button>
                    </a>
                )}
            </div>
        </motion.div>
    );
}
