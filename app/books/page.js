export default function BooksPage() {
  const books = [
    { id: 1, title: "Modern CSS with Tailwind", author: "Jane Smith" },
    { id: 2, title: "The Next.js Handbook", author: "John Doe" },
    { id: 3, title: "Mindset", author: "Carol Dweck" },
    { id: 4, title: "Cozy Reads: A Collection", author: "Various Authors" },
    { id: 5, title: "The Art of Reading", author: "Sarah Johnson" },
    { id: 6, title: "Finding Peace in Pages", author: "Michael Brown" },
  ];

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Book Recommendations</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white p-4 rounded shadow">
            <div className="bg-zinc-200 h-64 rounded flex items-center justify-center mb-3">
              <span className="text-zinc-500">Book Cover</span>
            </div>
            <h3 className="font-medium text-lg">{book.title}</h3>
            <p className="text-sm text-zinc-600">{book.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}