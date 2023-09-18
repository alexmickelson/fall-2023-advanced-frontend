import React, { useEffect, useState } from "react";
import { Book } from "../../models/books";
import { getBooks } from "../../services/bookService";

export const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks().then((books) => setBooks(books));
  }, []);
  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="d-flex flex-wrap">
        {books.map((b) => (
          <a key={b.id} className="card m-3" href={`/book/${b.id}`}>
            <div className="card-body">
              <h5 className="card-title">{b.title}</h5>
              <p className="card-text">
                <strong>Author:</strong> {b.author}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
