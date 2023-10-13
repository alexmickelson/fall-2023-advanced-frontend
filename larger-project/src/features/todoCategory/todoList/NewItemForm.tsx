import React, { FC, useState } from "react";

export const NewItemForm: FC<{ categoryId: string }> = () => {
  const [newItemText, setNewItemText] = useState("");
  // const items: TodoItem[] = [];

  const addItem = () => {
    // const newItemList: TodoItem[] = [
    //   ...items,
    //   {
    //     id: new Date().valueOf().toString(),
    //     text: newItemText,
    //     complete: false,
    //   },
    // ];

    // call add item mutation
  };

  return (
    <form
      className="mx-5 px-5"
      onSubmit={(e) => {
        e.preventDefault();
        addItem();
      }}
    >
      <label htmlFor="newItemText" className="form-label">
        New Item:
      </label>
      <input
        value={newItemText}
        onInput={(e) => setNewItemText(e.currentTarget.value)}
        className="form-control"
        id="newItemText"
      />
      <button className="btn btn-outline-primary mt-3">Add</button>
    </form>
  );
};
