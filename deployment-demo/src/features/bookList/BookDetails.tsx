import React, { FC } from "react";
import { Book } from "../../models/books";
import { BookForm } from "./BookForm";

export const BookDetails: FC<{ item: Book }> = ({ item }) => {
  const BookDetail = {
    "Author": item.author,
    "ISBN": item.ISBN,
    "Published Date": item.publishedDate.toString(),
    "Genre": item.genre,
    "Page Count": item.pages,
    "Language": item.language,
    "Publisher": item.publisher,
  };

  return (
    <div className="border border-4 rounded-5 p-3 bg-dark-subtle">
      <h1 className="text-center">{item.title}</h1>
      <hr />
      {Object.entries(BookDetail).map(([label, value]) => (
        <div className="fs-2">
          <strong className="text-secondary">{label}:</strong> {value}
        </div>
      ))}

      <hr />
      <BookForm book={item} />
    </div>
  );
};
