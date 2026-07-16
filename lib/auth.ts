import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

export interface JwtPayload {
  adminId: string
  email: string
  iat?: number
  exp?: number
}

export function generateToken(adminId: string, email: string): string {
  return jwt.sign(
    { adminId, email },
    JWT_SECRET,
    { expiresIn: '7d' }
  )
}

export async function verifyToken(token: string): Promise<JwtPayload | null> {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload
    return decoded
  } catch (error) {
    console.error('  Token verification failed:', error)
    return null
  }
}

export async function setAuthCookie(token: string) {
  const cookieStore = await cookies()
  console.log('  Setting auth cookie with token:', token)
  cookieStore.set('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  })
}

export async function getAuthToken(): Promise<string | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')?.value
  return token || null
}

export async function clearAuthCookie() {
  const cookieStore = await cookies()
  cookieStore.delete('auth_token')
}

export async function getAuthUser(): Promise<JwtPayload | null> {
  const token = await getAuthToken()
  if (!token) return null
  return verifyToken(token)
}
