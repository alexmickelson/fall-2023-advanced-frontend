import React, { FC } from "react";
import { Book } from "../../models/books";

export const BookDetails: FC<{ book: Book }> = ({ book }) => {
  const BookDetail = {
    Author: book.author,
    ISBN: book.ISBN,
    "Published Date": book.publishedDate.toString(),
    Genre: book.genre,
    "Page Count": book.pages,
    Language: book.language,
    Publisher: book.publisher
  }

  return (
    <div className="border border-4 rounded-5 p-3 bg-dark-subtle">
      <h1 className="text-center">{book.title}</h1>
      <hr />
      {Object.entries(BookDetail).map(([label, value]) =>
        <div className="fs-2">
          <strong className="text-secondary">{label}:</strong> {value}
        </div>
      )}
    </div>
  );
};
