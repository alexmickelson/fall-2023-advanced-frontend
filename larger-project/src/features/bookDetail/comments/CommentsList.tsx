import React, { FC } from "react";
import { Book } from "../../../models/books";

export const CommentsList: FC<{ book: Book }> = () => {

  return (
    <div>
      {/* <button
        className="btn btn-outline-primary"
        onClick={() => handleAddComment(book.id, "Great Book!")}
      >
        Add Comment
      </button>
      {comments
        .filter((c) => c.bookID === book.id)
        .map((comment: any, i: number) => (
          <div key={i}>
            <p>Book ID: {comment.bookID}</p>
            <p>Comment: {comment.comment}</p>
            <button
              className="btn btn-outline-danger"
              onClick={() => handleDeleteComment(i)}
            >
              Delete Comment
            </button>
          </div>
        ))} */}
    </div>
  );
};
