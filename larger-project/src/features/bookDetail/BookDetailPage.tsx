import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBooks } from "../../services/bookService";
import { BookContext, BookContextType } from "../../context/bookContext";

export const BookDetailPage = () => {
  const { bookId } = useParams();
  const { books, setBooks } = useContext(BookContext) as BookContextType ;

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
