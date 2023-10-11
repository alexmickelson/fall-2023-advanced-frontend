import React, { FC, useState } from "react";
import { NewItemForm } from "./NewItemForm";
import { useCategoryQuery } from "../hooks";
import { useQueryClient } from "@tanstack/react-query";

export const TodoList: FC<{ categoryId: string }> = ({ categoryId }) => {

  const categoryQuery = useCategoryQuery(categoryId);

  return (
    <div>
      <h3 className="text-center">To do list for: {categoryQuery.data?.name}</h3>

      <hr />

      <NewItemForm categoryId={categoryId} />

      <hr />
      <h3>List:</h3>
      <button
        className="btn btn-info"
        onClick={() => {
          // load items here
        }}
      >
        Load Items from API for categ
      </button>
      {/* {loading && <Spinner />} */}
      <ul>
        {/* {category.items.map((i) => (
          <TodoListItem key={i.id} todo={i} category={category} />
        ))} */}
      </ul>
    </div>
  );
};
