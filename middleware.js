// middleware.ts
import { NextResponse } from 'next/server';


// Define your username and password
const username = process.env.BASIC_AUTH_USER || 'admin';
const password = process.env.BASIC_AUTH_PASSWORD || 'password';

// Helper function to decode base64 and check credentials
function decodeCredentials(authHeader) {
  if (!authHeader) return null;

  // 'Basic <base64-encoded-credentials>'
  const base64Credentials = authHeader.split(' ')[1];
  const decodedCredentials = Buffer.from(base64Credentials, 'base64').toString();
  const [user, pass] = decodedCredentials.split(':');
  
  return { user, pass };
}

export function middleware(request) {
  const authHeader = request.headers.get('authorization');
  const credentials = decodeCredentials(authHeader);

  // Check if credentials are valid
  if (!credentials || credentials.user !== username || credentials.pass !== password) {
    // If not authenticated, return a 401 response with a WWW-Authenticate header
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  // If authentication is successful, continue with the request
  return NextResponse.next();
}

// Define which paths to apply the middleware to
export const config = {
  matcher: '/((?!api|_next|static|favicon.ico).*)', // Apply middleware to all routes except API, _next, and static files
};
