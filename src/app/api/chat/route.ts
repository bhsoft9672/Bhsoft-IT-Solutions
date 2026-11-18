import { NextRequest, NextResponse } from 'next/server';
import { findChatbotResponse, CHATBOT_WELCOME_MESSAGE } from '@/data/chatbotKnowledge';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userMessage: string = body.message || '';

    if (!userMessage.trim()) {
      return NextResponse.json({
        answer: CHATBOT_WELCOME_MESSAGE,
        quickReplies: ['🤖 AI Voice Calling Agent', '💬 WhatsApp Bot & Automation', '💰 Pricing & Timelines'],
      });
    }

    // Match query against our comprehensive knowledge base
    const response = findChatbotResponse(userMessage);

    return NextResponse.json({
      success: true,
      id: response.id,
      answer: response.answer,
      quickReplies: response.quickReplies || [],
      ctaUrl: response.ctaUrl,
      ctaText: response.ctaText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat query.' },
      { status: 500 }
    );
  }
}
