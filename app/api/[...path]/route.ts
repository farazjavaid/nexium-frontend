import { NextRequest, NextResponse } from 'next/server';

const BACKEND =
  process.env.BACKEND_URL ||
  'https://affectionate-magenta-kangaroo.39-61-46-46.cpanel.site/api';

async function handler(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const url = `${BACKEND}/${path.join('/')}`;

  const headers: Record<string, string> = {
    'Accept': 'application/json',
  };

  const contentType = req.headers.get('Content-Type');
  if (contentType) headers['Content-Type'] = contentType;

  const auth = req.headers.get('Authorization');
  if (auth) headers['Authorization'] = auth;

  // Origin header intentionally NOT forwarded
  // cPanel redirects (302) requests with external Origin headers

  const hasBody = req.method !== 'GET' && req.method !== 'HEAD';
  const body = hasBody ? await req.text() : undefined;

  const response = await fetch(url, {
    method: req.method,
    headers,
    body,
  });

  const text = await response.text();

  try {
    return NextResponse.json(JSON.parse(text), { status: response.status });
  } catch {
    return new NextResponse(text, {
      status: response.status,
      headers: { 'Content-Type': response.headers.get('Content-Type') || 'text/plain' },
    });
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
