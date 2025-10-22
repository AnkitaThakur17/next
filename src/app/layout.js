"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import ScrollToTop from "./components/UpButton";

// export const metadata = {
//   title: "My Next.js App",
//   description: "Made by Ankita",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/about" },
    { name: "Career", path: "/career" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <html lang="en">
      <body>
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#001F3F] text-white shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold cursor-pointer">
              <Link href="/">
                <Image
                  alt="logo"
                  src="/mindiii.webp"
                  width={170}
                  height={40}
                  priority
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Nav Links */}
            <ul className="flex space-x-8 text-sm font-medium">
              {navItems.map((item, i) => {
                const isActive =
                  pathname === item.path ||
                  (item.path !== "/" && pathname.startsWith(item.path));

                return (
                  <li key={i} className="relative group cursor-pointer">
                    <Link
                      href={item.path}
                      className={`text-lg font-bold transition-colors duration-200 ${
                        isActive
                          ? "text-red-500"
                          : "text-white hover:text-red-600"
                      }`}
                    >
                      {item.name}
                      {/* underline animation */}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-red-600 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Trending Button */}
            <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-semibold transition-all duration-200">
              Trending
            </button>
          </div>
        </nav>

        <ScrollToTop />
        <main>{children}</main>
      </body>
    </html>
  );
}

