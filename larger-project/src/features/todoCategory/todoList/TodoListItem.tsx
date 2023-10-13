import React, { FC, useState } from "react";
import {  useAppSelector } from "../../../store";
import { TodoCategory, TodoItem } from "../models";

export const TodoListItem: FC<{ todo: TodoItem; category: TodoCategory }> = ({
  todo,
}) => {
  const loading = useAppSelector((s) => s.todo.loading);
  const [isEditing, setIsEditing] = useState(false);
  const [editItemText, setEditItemText] = useState(todo.text);

  // todo: call api
  const editItem = () => {
    if (loading) return;
    // const newItem = { ...todo, text: editItemText };
    // const newItems: TodoItem[] = category.items.map((i) =>
    //   i.id === todo.id ? newItem : i
    // );
  };

  // todo call api
  const deleteItem = () => {
    if (loading) return;
    // const newItems = category.items.filter((i) => i.id !== todo.id);
  };

  return (
    <li key={todo.id} className="">
      <form
        className="row m-3"
        onSubmit={(e) => {
          e.preventDefault();
          editItem();
        }}
      >
        <div className="col-4 my-auto">
          {isEditing ? (
            <input
              className="form-control"
              value={editItemText}
              onChange={(e) => setEditItemText(e.target.value)}
            />
          ) : (
            <span>{todo.text}</span>
          )}
        </div>
        <div className="col-auto my-auto">
          {isEditing && (
            <button
              className="btn btn-primary"
              onClick={() => {
                editItem();
              }}
            >
              Save
            </button>
          )}
          {!isEditing && (
            <button
              className="btn btn-primary"
              onClick={() => {
                setEditItemText(todo.text);
                setIsEditing(true);
              }}
              disabled={loading}
            >
              Edit
            </button>
          )}
        </div>
        <div className="col-auto my-auto">
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              deleteItem();
            }}
            disabled={loading}
          >
            delete
          </button>
        </div>
        <div className="col"></div>
      </form>
    </li>
  );
};
