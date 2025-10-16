import Link from "next/link";
import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "My Next.js App",
  description: "Made by Ankita",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
 <nav className="bg-[#001F3F] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
            <Link href="/">
            <Image
              src="/mindiii.webp"
              width={120} 
              height={40}
              priority 
              className="object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-sm font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/industries">Industries</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/career">Career</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>

        {/* Trending Button */}
        <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-semibold transition-all duration-200">
          Trending
        </button>
      </div>
    </nav>

        <main>{children}</main>
        <footer className="bg-gray-900 text-white p-4 text-center">
          © 2025 Ankita Corp
        </footer>
      </body>
    </html>
  );
}
