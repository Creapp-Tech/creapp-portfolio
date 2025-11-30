"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Message } from "@/types/chatbot";
import { CHATBOT_CONFIG } from "@/lib/chatbot-config";
import ChatMessage from "@/components/ChatMessage";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            const welcomeMessage: Message = {
                id: `msg_${Date.now()}`,
                role: "assistant",
                content: CHATBOT_CONFIG.welcomeMessage,
                timestamp: new Date(),
                metadata: {
                    buttons: CHATBOT_CONFIG.quickActions,
                },
            };
            setMessages([welcomeMessage]);
        }
    }, [isOpen, messages.length]);

    const sendMessage = async (content: string) => {
        if (!content.trim()) return;

        const userMessage: Message = {
            id: `msg_${Date.now()}`,
            role: "user",
            content: content.trim(),
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    sessionId,
                    message: content.trim(),
                }),
            });

            const data = await response.json();
            await new Promise((resolve) => setTimeout(resolve, CHATBOT_CONFIG.typingDelay));

            const botMessage: Message = {
                id: `msg_${Date.now()}`,
                role: "assistant",
                content: data.message || "Lo siento, hubo un error. ¿Puedes intentar de nuevo?",
                timestamp: new Date(),
                metadata: {
                    buttons: data.suggestedActions,
                },
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error sending message:", error);

            const errorMessage: Message = {
                id: `msg_${Date.now()}`,
                role: "assistant",
                content: "Lo siento, hubo un problema de conexión. Por favor, intenta más tarde.",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleQuickAction = (action: string, value?: string) => {
        if (action === "schedule") {
            sendMessage("Me gustaría agendar una cita");
        } else if (action === "info" && value) {
            sendMessage(`Cuéntame sobre ${value}`);
        } else if (action === "contact") {
            sendMessage("Quiero información de contacto");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(inputValue);
    };

    return (
        <>
            {/* CHAT BUTTON */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50 flex items-center justify-center text-white hover:shadow-xl hover:shadow-blue-500/70 transition-all"
                        aria-label="Abrir chat"
                    >
                        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />

                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
                        />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* CHAT WINDOW */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 sm:w-full sm:max-w-md sm:h-[600px] bg-slate-900/95 backdrop-blur-xl border-0 sm:border border-white/10 sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* HEADER */}
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <MessageCircle size={20} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white text-sm sm:text-base">Creapp-Tech Assistant</h3>
                                    <p className="text-xs text-white/80">Powered by Gemini AI</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-10 h-10 rounded-lg hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                                aria-label="Cerrar chat"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* MESSAGES */}
                        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-slate-950/50">
                            {messages.map((message) => (
                                <ChatMessage
                                    key={message.id}
                                    message={message}
                                    onActionClick={handleQuickAction}
                                />
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 text-gray-400"
                                >
                                    <div className="flex gap-1">
                                        <motion.div
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                                            className="w-2 h-2 bg-blue-400 rounded-full"
                                        />
                                        <motion.div
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                            className="w-2 h-2 bg-cyan-400 rounded-full"
                                        />
                                        <motion.div
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                                            className="w-2 h-2 bg-blue-400 rounded-full"
                                        />
                                    </div>
                                    <span className="text-sm">Escribiendo...</span>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* INPUT */}
                        <form onSubmit={handleSubmit} className="p-3 sm:p-4 bg-slate-900/80 border-t border-white/10">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Escribe tu mensaje..."
                                    maxLength={CHATBOT_CONFIG.maxMessageLength}
                                    className="flex-1 px-3 sm:px-4 py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all"
                                    disabled={isTyping}
                                />
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={!inputValue.trim() || isTyping}
                                    className="px-3 sm:px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed min-w-[48px] flex items-center justify-center"
                                >
                                    {isTyping ? (
                                        <Loader2 size={20} className="animate-spin" />
                                    ) : (
                                        <Send size={20} />
                                    )}
                                </motion.button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">
                                {inputValue.length}/{CHATBOT_CONFIG.maxMessageLength}
                            </p>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
