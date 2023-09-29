import React, { FC } from "react";
import { Book } from "../../../models/books";
import { CommentsList } from "./CommentsList";
import { Provider } from "react-redux";
import store from "./commentStore";

export const BookComments: FC<{ book: Book }> = ({ book }) => (
  <Provider store={store}>
    <CommentsList book={book} />
  </Provider>
);
