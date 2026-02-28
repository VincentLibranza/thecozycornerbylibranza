import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center p-6">
      <main className="flex w-full max-w-3xl flex-col items-center gap-10 py-20 px-10 bg-white rounded-2xl shadow-2xl border border-zinc-100">
        <div className="relative h-40 w-32 shadow-lg rounded overflow-hidden">
          <Image
            src="/images/book1.png" 
            alt="Modern CSS with Tailwind"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
            Welcome to The Cozy Corner
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            A cozy online bookstore with hand-picked recommendations for every reader.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/books"
            className="flex h-14 items-center justify-center rounded-full bg-black px-10 text-white font-medium hover:bg-zinc-800 transition-all active:scale-95"
          >
            Browse Books
          </Link>

          <Link
            href="/about"
            className="flex h-14 items-center justify-center rounded-full border border-zinc-200 px-10 font-medium text-zinc-600 hover:bg-zinc-50 transition-all active:scale-95"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
}