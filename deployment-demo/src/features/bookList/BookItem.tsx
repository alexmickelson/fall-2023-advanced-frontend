import { FC } from "react";
import { Book } from "../../models/books";

export const Item: FC<{
  item: Book;
  onClick: (b: Book) => void;
}> = ({ item, onClick }) => {
  return (
    <button onClick={() => onClick(item)} className="btn btn-outline-primary">
      {item.title}
    </button>
  );
};
