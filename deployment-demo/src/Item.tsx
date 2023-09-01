import { FC } from "react";
import { Book } from "./models/books";

export const Item: FC<{
  item: Book;
  onClick: (b: Book) => void;
}> = ({ item, onClick }) => {
  return (
    <button role="button" onClick={() => onClick(item)}>
      {item.title}
    </button>
  );
};
