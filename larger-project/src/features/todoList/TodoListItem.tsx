import React, { FC, useState } from "react";
import { TodoItem, updateItemsThunk } from "./todoListSlice";
import { Spinner } from "../../components/Spinner";
import { useAppDispatch, useAppSelector } from "../../store";

export const TodoListItem: FC<{ todo: TodoItem }> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((s) => s.todo.items);
  const loading = useAppSelector((s) => s.todo.loading);
  const [isEditing, setIsEditing] = useState(false);
  const [editItemText, setEditItemText] = useState(todo.text);

  const editItem = () => {
    if (loading) return;
    const newItem = { ...todo, text: editItemText };
    const newItems: TodoItem[] = items.map((i) =>
      i.id === todo.id ? newItem : i
    );
    // dispatch(updateAndGetItemsThunk(newItems));
    // dispatch(updateAndGetItemsThunk(newItems))
    // dispatch(updateAndGetItemsThunk(newItems));

    //   .then(() => {
    //   setIsEditing(false);
    // });
  };

  const deleteItem = () => {
    if (loading) return;
    const newItems = items.filter((i) => i.id !== todo.id);
    // dispatch(updateAndGetItemsThunk(newItems))
    // dispatch(updateItemsThunk);
    //   .then(() => {
    //   setIsEditing(false);
    // });
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
function updateAndGetItemsThunk(newItems: TodoItem[]) {
  throw new Error("Function not implemented.");
}
