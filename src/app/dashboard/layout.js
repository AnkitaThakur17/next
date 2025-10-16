import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4 text-gray-400">Dashboard</h2>
        <ul className="space-y-2">
          <li><Link href="/dashboard" className="text-gray-400 hover:text-gray-700">Home</Link></li>
          <li><Link href="/settings" className="text-gray-400 hover:text-gray-700">Settings</Link></li>
          <li><Link href="/users" className="text-gray-400 hover:text-gray-700">Users</Link></li>
          <li><Link href="/profile" className="text-gray-400 hover:text-gray-700">User Profile</Link></li>
        </ul>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 bg-white">{children}</main>
    </div>
  );
}
