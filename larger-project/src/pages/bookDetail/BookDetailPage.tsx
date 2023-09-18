import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Book } from "../../models/books";
import { getBooks } from "../../services/bookService";

export const BookDetailPage = () => {
  const { bookId } = useParams();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks().then((books) => setBooks(books));
  }, []);

  const selectedBook = books.find((b) => b.id === bookId);

  return (
    <div>
      <h1>Book Detail Page</h1>

      <div>{selectedBook?.id}</div>
      <div>{selectedBook?.title}</div>
      <div>{selectedBook?.author}</div>
    </div>
  );
};
