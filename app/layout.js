import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Cozy Corner",
  description: "A cozy online bookstore with great recommendations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50`}>
        <header className="border-b bg-white sticky top-0 z-10">
          <div className="mx-auto max-w-6xl flex justify-between items-center p-4">
            <h1 className="text-xl font-bold text-zinc-800 tracking-tight">The Cozy Corner</h1>
            <nav className="flex gap-6 text-sm font-medium text-zinc-400">
              <Link href="/" className="hover:text-zinc-800 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-zinc-800 transition-colors">About</Link>
              <Link href="/books" className="hover:text-zinc-800 transition-colors">Books</Link>
              <Link href="/contacts" className="hover:text-zinc-800 transition-colors">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Removed the max-w-6xl wrapper here so the page background fills the screen */}
        {children}

        <footer className="text-center text-sm text-zinc-500 py-10">
          © 2026 The Cozy Corner
        </footer>
      </body>
    </html>
  );
}