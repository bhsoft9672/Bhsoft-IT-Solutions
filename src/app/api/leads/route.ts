import { NextRequest, NextResponse } from 'next/server';

interface LeadPayload {
  name: string;
  business?: string;
  email: string;
  phone: string;
  service: string;
  budget?: string;
  message: string;
}

// In-memory leads array for dev preview (can be connected to SQLite/Postgres/n8n webhook)
const leadsStore: Array<LeadPayload & { id: string; timestamp: string; status: string }> = [];

export async function POST(req: NextRequest) {
  try {
    const body: LeadPayload = await req.json();

    // 1. Basic Server-side Validation & Sanitization
    if (!body.name || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        { error: 'Please provide all required fields: Name, Email, Phone, and Project Description.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const sanitizedLead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: body.name.trim().slice(0, 100),
      business: (body.business || '').trim().slice(0, 120),
      email: body.email.trim().toLowerCase().slice(0, 100),
      phone: body.phone.trim().slice(0, 40),
      service: (body.service || 'general').trim(),
      budget: (body.budget || 'unspecified').trim(),
      message: body.message.trim().slice(0, 2000),
      timestamp: new Date().toISOString(),
      status: 'New'
    };

    leadsStore.unshift(sanitizedLead);

    // Optional external webhook forward hook (n8n/Slack/Telegram)
    if (process.env.LEAD_WEBHOOK_URL) {
      fetch(process.env.LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedLead)
      }).catch((e) => console.error('Lead webhook dispatch failed:', e));
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully. BHSOFT team will get in touch.',
      leadId: sanitizedLead.id
    });
  } catch (err: unknown) {
    console.error('Lead submission error:', err);
    return NextResponse.json(
      { error: 'Internal server error while processing your request.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Returns recent leads count for admin / healthcheck
  return NextResponse.json({
    totalLeads: leadsStore.length,
    recent: leadsStore.slice(0, 5)
  });
}
