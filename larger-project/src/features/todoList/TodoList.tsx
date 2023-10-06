import React, { useState } from "react";
import { Spinner } from "../../components/Spinner";
import { todoListService } from "./todoListService";
import { useAppDispatch, useAppSelector } from "../../store";
import { TodoListItem } from "./TodoListItem";
import { NewItemForm } from "./NewItemForm";
import { setItems } from "./todoListSlice";

export const TodoList = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const items = useAppSelector((s) => s.todo.items);

  return (
    <div className="container">
      <h1 className="text-center">Interacting With the API for Todo List</h1>

      <hr />

      <NewItemForm />

      <hr />
      <h3>List:</h3>
      {!loading && (
        <button
          className="btn btn-info"
          onClick={() => {
            setLoading(true);
            todoListService
              .getTodoItems()
              .then((apiItems) => dispatch(setItems({ items: apiItems })))
              .then(() => {
                setLoading(false);
              });
          }}
        >
          Load Items from API
        </button>
      )}
      {loading && <Spinner />}
      <ul>
        {items.map((i) => (
          <TodoListItem key={i.id} todo={i} />
        ))}
      </ul>
    </div>
  );
};
