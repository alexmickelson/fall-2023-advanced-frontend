import React, { FC, useState } from "react";
import { TodoItem, setItems } from "./todoListSlice";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../store";
import { todoListService } from "./todoListService";
import { Spinner } from "../../components/Spinner";

export const TodoListItem: FC<{ todo: TodoItem }> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((s) => s.todo.items);
  const [isEditing, setIsEditing] = useState(false);
  const [editItemText, setEditItemText] = useState(todo.text);
  const [loading, setLoading] = useState(false);

  const editItem = () => {
    setLoading(true);

    const newItem = { ...todo, text: editItemText };
    const newItems: TodoItem[] = items.map((i) =>
      i.id === todo.id ? newItem : i
    );

    console.log("saving new items", newItems);
    todoListService.storeTodoItems(newItems).then(() => {
      todoListService
        .getTodoItems()
        .then((itemsFromApi) => {
          dispatch(setItems({ items: itemsFromApi }));
        })
        .then(() => {
          setIsEditing(false);
          setLoading(false);
        });
    });
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
        <div className="col my-auto">
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
            >
              Edit
            </button>
          )}
        </div>
        <div className="col">{loading && <Spinner />}</div>
      </form>
    </li>
  );
};
