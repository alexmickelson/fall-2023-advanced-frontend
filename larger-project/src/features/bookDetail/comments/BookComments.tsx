import React, { FC } from "react";
import { Book } from "../../../models/books";
import { CommentsList } from "./CommentsList";

export const BookComments: FC<{ book: Book }> = ({ book }) => (
  <>
    <CommentsList book={book} />
  </>
);
