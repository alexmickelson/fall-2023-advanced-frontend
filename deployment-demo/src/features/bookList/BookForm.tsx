import React, { FC, FormEvent, useState } from "react";
import { Book } from "../../models/books";

export const BookForm: FC<{ book: Book; updateBook: (book: Book) => void }> = ({
  book,
  updateBook,
}) => {
  const [title, setTitle] = useState(book.title);

  const isValid = title.length > 3;

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    updateBook({
      ...book,
      title,
    });
  };

  return (
    <form className="needs-validation" onSubmit={submitHandler} noValidate>
      <div>
        <label className="form-label" htmlFor="title">
          Title
        </label>
        <div className="input-group has-validation">
          <input
            className="form-control"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-describedby="titlevalidation"
            required
          />

          {/* <div id="titlevalidation" className="invalid-feedback">
            need more than 3 characters
          </div>

          <div id="titlevalidation" className="valid-feedback">
            looks good
          </div> */}
        </div>
      </div>
      <button className="btn btn-primary my-3">Save</button>
    </form>
  );
};
