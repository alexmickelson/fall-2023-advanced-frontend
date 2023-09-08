import React, { FC } from "react";
import { Book } from "../../models/books";

export const BookDetails: FC<{ book: Book }> = ({ book }) => {
  return (
    <div>
      <h1>{book.title}</h1>
      <hr />
      <div>
        <strong>Author:</strong> {book.author}
      </div>
      <div>
        <strong>ISBN:</strong> {book.ISBN}
      </div>
      <div>
        <strong>Published Date:</strong> {book.publishedDate.toString()}
      </div>
      <div>
        <strong>Genre:</strong> {book.genre}
      </div>
      <div>
        <strong>Page Count:</strong> {book.pages}
      </div>
      <div>
        <strong>Language:</strong> {book.language}
      </div>
      <div>
        <strong>Publisher:</strong> {book.publisher}
      </div>
    </div>
  );
};
