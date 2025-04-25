// lib/jwt.js
import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET || '12345'

export function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '1d' })
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET)
  } catch (err) {
    return null
  }
}
