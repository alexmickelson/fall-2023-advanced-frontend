import React, { FC, useState } from "react";
import { Spinner } from "../../../components/Spinner";
import { todoListService } from "../todoListService";
import { useAppDispatch, useAppSelector } from "../../../store";
import { TodoListItem } from "./TodoListItem";
import { NewItemForm } from "./NewItemForm";
import { TodoCategory } from "../models";

export const TodoList: FC<{ categoryId: string }> = ({ categoryId }) => {

  //todo: retrieve category
  const category: TodoCategory = {
    id: "seta",
    name: "School",
    // items: [
    //   {
    //     id: "sdfse",
    //     text: "Do Homework",
    //     complete: false,
    //   },
    // ],
  };
  return (
    <div>
      <h3 className="text-center">To do list for: {category.name}</h3>

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
