import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BookContext, BookContextType } from "../../context/bookContext";
import { EditableBookTitle } from "./EditableBookTitle";
import { BookComments } from "./comments/BookComments";

export const BookDetailPage = () => {
  const { bookId } = useParams();
  const { books } = useContext(BookContext) as BookContextType;

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
        <div className="col my-auto"></div>
      </div>

      {selectedBook && <BookComments book={selectedBook} />}
    </div>
  );
};
