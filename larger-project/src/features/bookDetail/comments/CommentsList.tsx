import React, { FC } from "react";
import { Book } from "../../../models/books";
import { useDispatch, useSelector } from "react-redux";
import { CommentState, addComment, deleteComment } from "./commentReducer";

export const CommentsList: FC<{ book: Book }> = ({ book }) => {
  const comments = useSelector((state: CommentState) => state.comments);
  const dispatch = useDispatch();

  const handleAddComment = (bookID: string, comment: string) => {
    dispatch(addComment(bookID, comment));
  };

  const handleDeleteComment = (commentIndex: number) => {
    dispatch(deleteComment(commentIndex));
  };

  return (
    <div>
      <button
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
        ))}
    </div>
  );
};
