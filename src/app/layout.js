import "./globals.css";

export const metadata = {
  title: "My Next.js App",
  description: "Made by Ankita",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-500 text-white p-4">My Navbar</header>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white p-4 text-center">
          © 2025 Ankita Corp
        </footer>
      </body>
    </html>
  );
}
