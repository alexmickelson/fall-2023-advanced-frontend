import React, { useEffect, useState } from "react";
import { Book } from "../../models/books";
import { getBooks } from "../../services/bookService";
import { Link } from "react-router-dom";

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
          <Link key={b.id} className="card m-3" to={`/book/${b.id}`}>
            <div className="card-body">
              <h5 className="card-title">{b.title}</h5>
              <p className="card-text">
                <strong>Author:</strong> {b.author}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
