import React, { FC } from "react";
import { Book } from "../../../models/books";
import { useCommentReducer } from "./commentReducer";

export const CommentsList: FC<{ book: Book }> = ({ book }) => {
  const [state, dispatch] = useCommentReducer();

  const handleAddComment = (bookID: string, comment: string) => {
    dispatch({
      type: "ADD_COMMENT",
      payload: { bookID, comment },
    });
  };

  const handleDeleteComment = (commentIndex: number) => {
    dispatch({
      type: "DELETE_COMMENT",
      payload: { commentIndex },
    });
  };

  return (
    <div>
      <button
        className="btn btn-outline-primary"
        onClick={() => handleAddComment("1", "Great Book!")}
      >
        Add Comment
      </button>
      {state.comments.map((comment: any, i: number) => (
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
      ))}
    </div>
  );
};
