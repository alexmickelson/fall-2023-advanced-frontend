import { FC } from "react";
import { Book } from "../../models/books";

export const Item: FC<{
  item: Book;
  onClick: (b: Book) => void;
  isSelected: Boolean;
}> = ({ item, onClick, isSelected }) => {
  return (
    <li role="button" onClick={() => onClick(item)} className={` list-group-item ${isSelected && " active "}`}>
      {item.title}
    </li>
  );
};
