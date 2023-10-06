import React, { useState } from "react";
import { Spinner } from "../../components/Spinner";
import { useAppDispatch, useAppSelector } from "../../store";
import { todoListService } from "./todoListService";
import { TodoItem, setItems } from "./todoListSlice";

export const NewItemForm = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((s) => s.todo.items);
  const [newItemText, setNewItemText] = useState("");

  const [loadingRequest, setLoadingRequest] = useState(false);

  const addItem = () => {
    const newItemList: TodoItem[] = [
      ...items,
      {
        id: new Date().valueOf().toString(),
        text: newItemText,
        complete: false,
      },
    ];
    setLoadingRequest(true);
    todoListService.storeTodoItems(newItemList).then(() => {
      todoListService
        .getTodoItems()
        .then((itemsFromApi) => {
          dispatch(setItems({ items: itemsFromApi }));
        })
        .then(() => {
          setNewItemText("");
          setLoadingRequest(false);
        });
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
      <button
        className="btn btn-outline-primary mt-3"
        disabled={loadingRequest}
      >
        Add
      </button>
      {loadingRequest && <Spinner />}
    </form>
  );
};
