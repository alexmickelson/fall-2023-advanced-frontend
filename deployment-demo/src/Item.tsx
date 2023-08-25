import { FC } from "react";
import { ListItem } from "./models/listItem";

export const Item: FC<{
  item: ListItem;
  onClick: (i: number) => number;
}> = ({ item, onClick }) => {
  const i = onClick(item.id);
  return <div onClick={() => onClick(item.id)}>{item.name}</div>;
};
