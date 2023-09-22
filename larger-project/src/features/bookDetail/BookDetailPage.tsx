import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBooks } from "../../services/bookService";
import { BookContext, BookContextType } from "../../context/bookContext";
import { EditIcon } from "./EditIcon";
import { EditableBookTitle } from "./EditableBookTitle";

export const BookDetailPage = () => {
  const { bookId } = useParams();
  const { books, setBooks } = useContext(BookContext) as BookContextType;

  const selectedBook = books.find((b) => b.id === bookId);

  return (
    <div className="container m-3">
      <h1 className="text-center">Book Detail Page</h1>

      <div className="row justify-content-center my-3">
        <div className="col text-end my-auto">
          <strong>ID:</strong>
        </div>
        <div className="col my-auto">{selectedBook?.id}</div>
        <div className="col my-auto"></div>
      </div>
      {selectedBook && <EditableBookTitle book={selectedBook} />}
      <div className="row justify-content-center my-3">
        <div className="col text-end my-auto">
          <strong>Author:</strong>
        </div>
        <div className="col my-auto">{selectedBook?.author}</div>
        <div className="col my-auto">
          <button className="btn btn-primary">
            <EditIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
