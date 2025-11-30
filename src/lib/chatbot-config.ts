// Chatbot Configuration

export const CHATBOT_CONFIG = {
    // n8n Webhook URL (Docker local or production)
    n8nWebhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'http://localhost:5678/webhook/chatbot',

    // Chatbot behavior
    welcomeMessage: '¡Hola! 👋 Soy el asistente virtual de Creapp-Tech. ¿En qué puedo ayudarte hoy?',
    typingDelay: 1000, // ms
    maxMessageLength: 500,

    // Business hours (for appointment scheduling)
    businessHours: {
        monday: { start: '09:00', end: '18:00' },
        tuesday: { start: '09:00', end: '18:00' },
        wednesday: { start: '09:00', end: '18:00' },
        thursday: { start: '09:00', end: '18:00' },
        friday: { start: '09:00', end: '18:00' },
        saturday: { start: '10:00', end: '14:00' },
        sunday: null, // Closed
    },

    // Services offered
    services: [
        'Desarrollo Web',
        'Automatización con n8n',
        'Sistemas de Gestión ISO',
        'Integración de APIs',
        'Consultoría Tecnológica',
        'Otro',
    ],

    // Quick action buttons
    quickActions: [
        { id: 'schedule', label: '📅 Agendar cita', action: 'schedule' as const },
        { id: 'services', label: '💼 Ver servicios', action: 'info' as const, value: 'services' },
        { id: 'contact', label: '📞 Contacto directo', action: 'contact' as const },
    ],

    // Form fields for appointment
    appointmentFields: [
        { id: 'name', type: 'text' as const, label: 'Nombre completo', required: true },
        { id: 'email', type: 'email' as const, label: 'Email', required: true },
        { id: 'phone', type: 'tel' as const, label: 'Teléfono', required: true },
        { id: 'company', type: 'text' as const, label: 'Empresa (opcional)', required: false },
        {
            id: 'service', type: 'select' as const, label: 'Servicio de interés', required: true, options: [
                'Desarrollo Web',
                'Automatización con n8n',
                'Sistemas de Gestión ISO',
                'Integración de APIs',
                'Consultoría Tecnológica',
                'Otro',
            ]
        },
        { id: 'date', type: 'date' as const, label: 'Fecha preferida', required: true },
        { id: 'time', type: 'time' as const, label: 'Hora preferida', required: true },
    ],
};

// Predefined responses for common questions
export const PREDEFINED_RESPONSES = {
    services: `Ofrezco los siguientes servicios:

📱 **Desarrollo Web**: Sitios y aplicaciones modernas con Next.js, React
🤖 **Automatización**: Workflows inteligentes con n8n
📊 **Sistemas ISO**: Implementación de sistemas de gestión
🔗 **Integraciones**: APIs, CRMs, herramientas empresariales
💡 **Consultoría**: Asesoría tecnológica para pymes

¿Te gustaría agendar una cita para hablar sobre alguno?`,

    pricing: `Los precios varían según el proyecto y sus necesidades específicas. 

Me encantaría conocer más sobre tu proyecto para darte una cotización personalizada. ¿Agendamos una llamada?`,

    contact: `Puedes contactarme por:

📧 Email: info@creapp-tech.com
📱 WhatsApp: +1 (234) 567-890
📍 Ubicación: Tu Ciudad, País

¿Prefieres que agendemos una videollamada?`,
};
