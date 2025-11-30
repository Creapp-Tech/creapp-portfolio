"use client";

import { motion } from "framer-motion";
import { Message, ActionButton } from "@/types/chatbot";

interface ChatMessageProps {
    message: Message;
    onActionClick: (action: string, value?: string) => void;
}

export default function ChatMessage({ message, onActionClick }: ChatMessageProps) {
    const isUser = message.role === "user";

    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
        >
            <div className={`max-w-[80%] ${isUser ? "order-2" : "order-1"}`}>
                {/* MESSAGE BUBBLE */}
                <div
                    className={`px-4 py-3 rounded-2xl ${isUser
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                            : "bg-white/10 text-gray-100 border border-white/10"
                        }`}
                >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>

                {/* ACTION BUTTONS */}
                {message.metadata?.buttons && message.metadata.buttons.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-3 flex flex-wrap gap-2"
                    >
                        {message.metadata.buttons.map((button) => (
                            <motion.button
                                key={button.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onActionClick(button.action, button.value)}
                                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 rounded-lg text-sm text-gray-300 hover:text-white transition-all"
                            >
                                {button.label}
                            </motion.button>
                        ))}
                    </motion.div>
                )}

                {/* TIMESTAMP */}
                <p className={`text-xs text-gray-500 mt-1 ${isUser ? "text-right" : "text-left"}`}>
                    {new Date(message.timestamp).toLocaleTimeString("es-ES", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </p>
            </div>
        </motion.div>
    );
}
