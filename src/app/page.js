import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-4 text-gray-400">
        Welcome to My Next.js App!
      </h1>
      <p className="text-lg mb-6 text-gray-400">
        This is your home page. Let’s make something awesome
      </p>
      <div className="space-x-4">
        <Link href="/about">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            About Page
          </button>
        </Link>
        <Link href="/contact">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Contact Page
          </button>
        </Link>

        <Link
          href="/dashboard"
          className="px-4 py-3 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Dashboard
        </Link>
      </div>
    </main>
  );
}
