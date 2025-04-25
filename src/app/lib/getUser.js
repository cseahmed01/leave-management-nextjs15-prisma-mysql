// lib/getUser.js
import { cookies } from 'next/headers'
import { verifyToken } from './jwt'

export function getUserFromRequest() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value
  return verifyToken(token)
}
