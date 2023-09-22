import React, { FC, useContext, useState } from "react";
import { Book } from "../../models/books";
import { DoneIcon, EditIcon } from "./EditIcon";
import { BookContext } from "../../context/bookContext";

export const EditableBookTitle: FC<{ book: Book }> = ({ book }) => {
  const { updateBook } = useContext(BookContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTitle, setEditingTitle] = useState(book.title);

  return (
    <div className="row justify-content-center my-3">
      <div className="col text-end my-auto">
        <strong>Title:</strong>
      </div>
      <div className="col my-auto">
        {!isEditing && book.title}
        {isEditing && (
          <input
            className="form-control"
            value={editingTitle}
            onChange={(e) => {
              setEditingTitle(e.target.value);
              updateBook({
                ...book,
                title: e.target.value,
              });
            }}
          />
        )}
      </div>
      <div className="col my-auto">
        {!isEditing && (
          <button
            className="btn btn-primary"
            onClick={() => setIsEditing(true)}
          >
            <EditIcon />
          </button>
        )}
        {isEditing && (
          <button
            className="btn btn-success"
            onClick={() => setIsEditing(false)}
          >
            <DoneIcon />
          </button>
        )}
      </div>
    </div>
  );
};
