import React, { FC, useState } from "react";
import { Book } from "../../models/books";

export const BookForm: FC<{ book: Book }> = ({ book }) => {
  const [title, setTitle] = useState(book.title);

  const isValid = title.length > 3;
  return (
    <form className="needs-validation" noValidate>
      <div>
        <label className="form-label" htmlFor="title">
          Title
        </label>
        <div className="input-group has-validation">
          <input
            className="form-control is-invalid"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-describedby="titlevalidation"
            required
          />

          <div id="titlevalidation" className="invalid-feedback">
            need more than 3 characters
          </div>

          <div id="titlevalidation" className="valid-feedback">
            looks good
          </div>
        </div>
      </div>
      <div className="">
        <label htmlFor="validationServerUsername" className="form-label">
          Username
        </label>
        <div className="input-group has-validation">
          <input
            type="text"
            className="form-control is-invalid"
            id="validationServerUsername"
            aria-describedby="validationServerUsernameFeedback"
            required
          />
          <div
            id="validationServerUsernameFeedback"
            className="invalid-feedback"
          >
            Please choose a username.
          </div>
        </div>
      </div>
      <button className="btn btn-primary my-3">Save</button>
    </form>
  );
};
