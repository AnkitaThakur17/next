import Link  from "next/link"

function dashboardLayout ({children}){
 return(
    <div className="flex min-h-screen">
          {/* siderbar */}
          <aside className="w-60 bg-gray-100 p-4">
          <h2 className="text-xl font-bold mb-4 text-gray-400">Dashboard</h2>
          <ul className="space-y-2">
          <li><Link href="/dashboard" className="text-gray-400">Home</Link></li>
          <li><Link href="/dashboard/settings" className="text-gray-400">Settings</Link></li>
          <li><Link href="/dashboard/users/101" className="text-gray-400">User 101</Link></li>
          <li><Link href="/dashboard/profile" className="text-gray-400">User Profile</Link></li>
          </ul>
          </aside>
        {/* main */}
        <main className="flex-1 p-6 bg-white">{children}</main>
    </div>
 )
}

export default dashboardLayout;