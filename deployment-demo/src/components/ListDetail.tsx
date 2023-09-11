import React, { FC, useState } from "react";

interface Props<
  T extends {
    id: string;
    title: string;
  }
> {
  items: T[];
  updateItem: (i: T) => void;
  ListComponent: FC<{
    item: T;
    isSelected: boolean;
    onClick: (i: T) => void;
  }>;
  ItemDetail: FC<{
    item: T;
    updateItem: (i: T) => void;
  }>;
}

export const ListDetail = <T extends { id: string; title: string }>({
  items,
  ListComponent,
  ItemDetail,
  updateItem,
}: Props<T>) => {
  const [selectedItemId, setSelectedItemId] = useState<string>()

  const selectedItem = items.find(i => i.id === selectedItemId)
  return (
    <div className="row">
      <div className="col-4">
        <ul className="list-group">
          {items.map((i) => (
            <ListComponent
              onClick={(b) => setSelectedItemId(b.id)}
              key={i.id}
              item={i}
              isSelected={i.id === selectedItemId}
            />
          ))}
        </ul>
      </div>
      <div className="col">
        {selectedItem && (
          <ItemDetail item={selectedItem} updateItem={updateItem} />
        )}
      </div>
    </div>
  );
};
