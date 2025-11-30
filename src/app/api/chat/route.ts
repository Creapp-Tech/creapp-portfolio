import { NextRequest, NextResponse } from "next/server";
import { CHATBOT_CONFIG } from "@/lib/chatbot-config";
import { N8nWebhookPayload, N8nWebhookResponse } from "@/types/chatbot";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { sessionId, message, clientInfo } = body;

        // Validate input
        if (!sessionId || !message) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: 400 }
            );
        }

        // Prepare payload for n8n
        const payload: N8nWebhookPayload = {
            sessionId,
            message,
            clientInfo,
            action: "chat",
        };

        // Call n8n webhook
        const n8nResponse = await fetch(CHATBOT_CONFIG.n8nWebhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!n8nResponse.ok) {
            throw new Error(`n8n webhook failed: ${n8nResponse.statusText}`);
        }

        const data: N8nWebhookResponse = await n8nResponse.json();

        return NextResponse.json({
            success: true,
            message: data.message,
            isNewClient: data.isNewClient,
            suggestedActions: data.suggestedActions,
            hubspotContact: data.hubspotContact,
        });

    } catch (error) {
        console.error("Error in chat API:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Lo siento, hubo un error procesando tu mensaje. Por favor, intenta de nuevo.",
            },
            { status: 500 }
        );
    }
}
