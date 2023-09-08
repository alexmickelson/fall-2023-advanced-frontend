import React, { FC, useState } from "react";

interface Props<
  T extends {
    id: string;
    title: string;
  }
> {
  items: T[];
  ListComponent: FC<{
    item: T;
    isSelected: boolean;
    onClick: (i: T) => void;
  }>;
  ItemDetail: FC<{
    item: T;
  }>;
}

export const ListDetail = <T extends { id: string; title: string }>({
  items,
  ListComponent,
  ItemDetail,
}: Props<T>) => {
  const [selectedItem, setSelectedItem] = useState<T>();
  return (
    <div className="row">
      <div className="col-4">
        <ul className="list-group">
          {items.map((i) => (
            <ListComponent
              onClick={(b) => setSelectedItem(b)}
              key={i.id}
              item={i}
              isSelected={i.id === selectedItem?.id}
            />
          ))}
        </ul>
      </div>
      <div className="col">
        {selectedItem && <ItemDetail item={selectedItem} />}
      </div>
    </div>
  );
};
