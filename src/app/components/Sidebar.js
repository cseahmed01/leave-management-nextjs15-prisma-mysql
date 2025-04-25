'use client'
import Link from 'next/link'

export default function Sidebar({ user }) {
  return (
    <aside className="w-64 bg-white shadow h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">Leave Manager</h2>
      <nav>
        <ul className="space-y-4">
          <li><Link href="/dashboard" className="block hover:text-blue-600">Dashboard</Link></li>
          <li><Link href="/leaves/apply" className="block hover:text-blue-600">Apply for Leave</Link></li>
          <li><Link href="/leaves/mine" className="block hover:text-blue-600">My Leaves</Link></li>

          {(user.role === 'MANAGER' || user.role === 'ADMIN') && (
            <li><Link href="/leaves/pending" className="block hover:text-blue-600">Pending Approvals</Link></li>
          )}

          {user.role === 'ADMIN' && (
            <li><Link href="/admin/users" className="block hover:text-blue-600">Manage Users</Link></li>
          )}

          <li>
            <form action="/api/auth/logout" method="GET">
              <button type="submit" className="text-red-600 hover:underline">Logout</button>
            </form>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
