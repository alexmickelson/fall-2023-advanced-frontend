import React, { FC } from "react";
import { Book } from "../../../models/books";
import { CommentsList } from "./CommentsList";
import { Provider } from "react-redux";
import { commentStore } from "./commentReducer";

export const BookComments: FC<{ book: Book }> = ({ book }) => (
  <Provider store={commentStore}>
    <CommentsList book={book} />
  </Provider>
);
