// Chatbot Types
export interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
    metadata?: {
        isTyping?: boolean;
        buttons?: ActionButton[];
        formData?: FormField[];
    };
}

export interface ActionButton {
    id: string;
    label: string;
    action: 'schedule' | 'contact' | 'info' | 'custom';
    value?: string;
}

export interface FormField {
    id: string;
    type: 'text' | 'email' | 'tel' | 'date' | 'time' | 'select';
    label: string;
    placeholder?: string;
    required: boolean;
    options?: string[];
    value?: string;
}

export interface ChatSession {
    sessionId: string;
    userId?: string;
    isNewClient: boolean;
    messages: Message[];
    metadata: {
        startedAt: Date;
        lastActivity: Date;
        clientInfo?: ClientInfo;
    };
}

export interface ClientInfo {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    hubspotContactId?: string;
}

export interface AppointmentRequest {
    clientInfo: ClientInfo;
    preferredDate: string;
    preferredTime: string;
    service: string;
    notes?: string;
}

export interface N8nWebhookPayload {
    sessionId: string;
    message: string;
    clientInfo?: ClientInfo;
    action?: 'chat' | 'schedule' | 'identify';
}

export interface N8nWebhookResponse {
    success: boolean;
    message: string;
    isNewClient?: boolean;
    hubspotContact?: {
        id: string;
        properties: Record<string, any>;
    };
    suggestedActions?: ActionButton[];
}
