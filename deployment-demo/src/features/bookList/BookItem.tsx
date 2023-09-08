import { FC } from "react";
import { Book } from "../../models/books";

export const BookItem: FC<{
  item: Book;
  onClick: (b: Book) => void;
  isSelected: boolean;
}> = ({ item, onClick, isSelected }) => {
  return (
    <li
      role="button"
      onClick={() => onClick(item)}
      className={` list-group-item ${isSelected && " active "}`}
    >
      {item.title}
    </li>
  );
};
