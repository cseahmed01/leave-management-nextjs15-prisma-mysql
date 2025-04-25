import { NextResponse } from 'next/server'

export async function GET(req) {
  const response = NextResponse.redirect(new URL('/login', req.url))

  // Clear the JWT cookie
  response.cookies.set('token', '', {
    maxAge: 0,
    path: '/', // make sure it's removed across the entire site
  })

  return response
}
