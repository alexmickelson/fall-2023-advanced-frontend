import React from "react";
import { TodoList } from "./todoList/TodoList";
import { TodoCategory } from "./models";
import { NewCategory } from "./NewCategory";

export const TodoCategories = () => {

  // todo: get from api
  const categories: TodoCategory[] = [
    {
      id: "seta",
      name: "School",
      items: [
        {
          id: "sdfse",
          text: "Do Homework",
          complete: false,
        },
      ],
    },
  ];
  return (
    <div className="container">
      <h1>Todo Categories</h1>

      <div className="p-5 mx-5 bg-dark-subtle border border-4 rounded-4 ">
        <NewCategory />
      </div>

      <br />

      {categories.map((c) => (
        <div className="p-5 bg-dark-subtle border border-4 rounded-4 ">
          <TodoList key={c.id} categoryId={c.id} />
        </div>
      ))}
    </div>
  );
};
