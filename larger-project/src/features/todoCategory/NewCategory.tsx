import React, { FC, useState } from "react";
import { TodoCategory } from "./models";
import { useCategoryQuery } from "./hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoListService } from "./todoListService";

export const NewCategory = () => {
  const queryClient = useQueryClient();
  const [newCategoryName, setNewCategoryName] = useState("");
  const categoriesQuery = useCategoryQuery();

  const addCategoryMutation = useMutation({
    mutationFn: (allCategories: TodoCategory[]) =>
      todoListService.setCategories(allCategories),
    onSuccess: () => queryClient.invalidateQueries(["categories"]),
  });

  const addCategory = () => {
    if (!categoriesQuery.data) return;

    const newCategoryList: TodoCategory[] = [
      ...categoriesQuery.data,
      {
        id: new Date().valueOf().toString(),
        name: newCategoryName,
      },
    ];

    addCategoryMutation.mutate(newCategoryList)
  };

  return (
    <form
      className="mx-5 px-5"
      onSubmit={(e) => {
        e.preventDefault();
        addCategory();
      }}
    >
      <label htmlFor="newCategoryNameText" className="form-label">
        New Category:
      </label>
      <input
        value={newCategoryName}
        onInput={(e) => setNewCategoryName(e.currentTarget.value)}
        className="form-control"
        id="newCategoryNameText"
      />
      <button
        className="btn btn-outline-primary mt-3"
        disabled={!categoriesQuery.data}
      >
        Add
      </button>
    </form>
  );
};
