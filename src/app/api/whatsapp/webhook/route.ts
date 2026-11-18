import { NextRequest, NextResponse } from 'next/server';
import { findChatbotResponse } from '@/data/chatbotKnowledge';

// Meta WhatsApp Cloud API Webhook Verification Token (set in env or defaults for setup)
const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'bhsoft_whatsapp_verify_token_2026';

// 1. GET: Webhook verification handshake with Meta Graph API
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('WhatsApp Webhook verified successfully!');
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json({ error: 'Verification token mismatch' }, { status: 403 });
}

// 2. POST: Handle incoming WhatsApp messages from actual users
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Check if this is an event from a WhatsApp Business Account
    if (body.object === 'whatsapp_business_account') {
      const entry = body.entry?.[0];
      const changes = entry?.changes?.[0];
      const value = changes?.value;
      const message = value?.messages?.[0];

      if (message && message.type === 'text') {
        const from = message.from; // Sender phone number
        const text = message.text.body;

        console.log(`Received WhatsApp message from ${from}: ${text}`);

        // Find response from our knowledge base
        const botResponse = findChatbotResponse(text);

        // If Meta Access Token is set, dispatch reply back to user
        const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
        const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

        if (accessToken && phoneNumberId) {
          const replyPayload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'text',
            text: {
              preview_url: true,
              body: botResponse.answer.replace(/\*\*/g, '*'), // Convert markdown bold to WhatsApp formatting
            },
          };

          await fetch(`https://graph.facebook.com/v21.0/${phoneNumberId}/messages`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(replyPayload),
          }).catch((err) => console.error('Failed to send WhatsApp reply:', err));
        }
      }

      return NextResponse.json({ status: 'EVENT_RECEIVED' }, { status: 200 });
    }

    return NextResponse.json({ error: 'Not a whatsapp event' }, { status: 404 });
  } catch (err) {
    console.error('WhatsApp webhook error:', err);
    return NextResponse.json({ status: 'OK' }, { status: 200 });
  }
}
