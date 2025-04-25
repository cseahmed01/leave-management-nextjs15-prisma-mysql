import { prisma } from '@/app/lib/prisma'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'
import { signToken } from '@/app/lib/jwt'

export async function POST(req) {
  const { email, password } = await req.json()

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 401 })
  }

  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) {
    return NextResponse.json({ message: 'Invalid password' }, { status: 401 })
  }

  const token = signToken({ id: user.id, role: user.role,name:user.name })

  const response = NextResponse.json({ message: 'Login successful' })
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24, // 1 day
  })

  return response
}
