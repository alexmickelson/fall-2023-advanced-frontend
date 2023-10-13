import React from "react";
import { TodoList } from "./todoList/TodoList";
import { TodoCategory } from "./models";
import { NewCategory } from "./NewCategory";
import { useQuery } from "@tanstack/react-query";
import { todoListService } from "./todoListService";
import { Spinner } from "../../components/Spinner";
import { useCategoriesQuery } from "./hooks";
import toast from "react-hot-toast";

export const TodoCategories = () => {
  const categoriesQuery = useCategoriesQuery();

  toast("this is my toast")

  return (
    <div className="container">
      <h1>Todo Categories</h1>

      <div className="p-5 mx-5 bg-dark-subtle border border-4 rounded-4 ">
        <NewCategory />
      </div>

      <br />
      {categoriesQuery.isLoading && <Spinner />}
      {categoriesQuery.isError && <div>we had an error</div>}
      {categoriesQuery.data?.map((c) => (
        <div className="p-5 bg-dark-subtle border border-4 rounded-4 ">
          <TodoList key={c.id} categoryId={c.id} />
        </div>
      ))}
    </div>
  );
};
