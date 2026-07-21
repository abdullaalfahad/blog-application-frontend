import { createAuthClient } from 'better-auth/react';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000';

export const authClient = createAuthClient({
  baseURL: BACKEND_URL,
});
