import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.VITE_JWT_SECRET || 'yego-secret-key';

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

export const generateToken = (payload: Omit<JWTPayload, 'iat' | 'exp'>): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
};

export const verifyToken = (token: string): JWTPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
};

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwt.decode(token) as JWTPayload;
    if (!decoded || !decoded.exp) return true;
    
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;
  } catch (error) {
    return true;
  }
};

export const getTokenFromStorage = (): string | null => {
  return localStorage.getItem('yego-token');
};

export const setTokenToStorage = (token: string): void => {
  localStorage.setItem('yego-token', token);
};

export const removeTokenFromStorage = (): void => {
  localStorage.removeItem('yego-token');
};

