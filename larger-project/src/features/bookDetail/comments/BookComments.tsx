import React, { FC } from "react";
import { Book } from "../../../models/books";
import { CommentsList } from "./CommentsList";
import { Provider } from "react-redux";
import store from "../../../store";

export const BookComments: FC<{ book: Book }> = ({ book }) => (
    <CommentsList book={book} />
);
