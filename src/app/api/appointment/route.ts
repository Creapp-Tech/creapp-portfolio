import { NextRequest, NextResponse } from "next/server";
import { AppointmentRequest } from "@/types/chatbot";

export async function POST(request: NextRequest) {
    try {
        const body: AppointmentRequest = await request.json();
        const { clientInfo, preferredDate, preferredTime, service, notes } = body;

        // Validate required fields
        if (!clientInfo.email || !clientInfo.name || !preferredDate || !preferredTime || !service) {
            return NextResponse.json(
                { success: false, message: "Faltan campos requeridos" },
                { status: 400 }
            );
        }

        // Prepare payload for n8n appointment workflow
        const payload = {
            action: "schedule",
            appointment: {
                clientInfo: {
                    name: clientInfo.name,
                    email: clientInfo.email,
                    phone: clientInfo.phone,
                    company: clientInfo.company,
                },
                preferredDate,
                preferredTime,
                service,
                notes,
                requestedAt: new Date().toISOString(),
            },
        };

        // Call n8n webhook for appointment scheduling
        const n8nWebhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'http://localhost:5678/webhook/chatbot';

        const n8nResponse = await fetch(n8nWebhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!n8nResponse.ok) {
            throw new Error(`n8n webhook failed: ${n8nResponse.statusText}`);
        }

        const data = await n8nResponse.json();

        return NextResponse.json({
            success: true,
            message: "¡Cita agendada exitosamente! Recibirás una confirmación por email.",
            calendarEvent: data.calendarEvent,
            hubspotContact: data.hubspotContact,
        });

    } catch (error) {
        console.error("Error scheduling appointment:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Hubo un error al agendar la cita. Por favor, intenta de nuevo o contáctanos directamente.",
            },
            { status: 500 }
        );
    }
}
