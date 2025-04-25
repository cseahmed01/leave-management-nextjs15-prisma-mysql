import { getUserFromRequest } from '../lib/getUser'
import { redirect } from 'next/navigation'
import Sidebar from '../components/Sidebar'

export default async function DashboardPage() {
  const user = await getUserFromRequest()

  if (!user) redirect('/login')

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar user={user} />

      <main className="flex-1 p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
          <p className="text-gray-600">Role: {user.role}</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-lg">Your user ID: {user.id}</p>
          <p className="mt-2 text-sm text-gray-500">
            You are logged in as <strong>{user.role}</strong>.
          </p>
        </div>
      </main>
    </div>
  )
}
