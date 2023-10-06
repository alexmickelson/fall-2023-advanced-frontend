import React, { useState } from "react";
import { Spinner } from "../../components/Spinner";
import { useAppDispatch, useAppSelector } from "../../store";
import { todoListService } from "./todoListService";
import { TodoItem, updateAndGetItemsThunk } from "./todoListSlice";

export const NewItemForm = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((s) => s.todo.items);
  const loading = useAppSelector((s) => s.todo.loading);
  const [newItemText, setNewItemText] = useState("");

  const addItem = () => {
    if (loading) return;
    const newItemList: TodoItem[] = [
      ...items,
      {
        id: new Date().valueOf().toString(),
        text: newItemText,
        complete: false,
      },
    ];
    dispatch(updateAndGetItemsThunk(newItemList)).then(() => {
      setNewItemText("");
    });
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
      <button className="btn btn-outline-primary mt-3" disabled={loading}>
        Add
      </button>
    </form>
  );
};
