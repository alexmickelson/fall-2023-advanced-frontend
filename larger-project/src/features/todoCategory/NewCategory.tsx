import React, { useState } from "react";
import { TodoCategory } from "./models";
import { useAddCategoryMutation, useCategoriesQuery } from "./hooks";

export const NewCategory = () => {
  const [newCategoryName, setNewCategoryName] = useState("");
  const categoriesQuery = useCategoriesQuery();

  const addCategoryMutation = useAddCategoryMutation()

  const addCategory = () => {
    if (!categoriesQuery.data) return;

    const newCategoryList: TodoCategory[] = [
      ...categoriesQuery.data,
      {
        id: new Date().valueOf().toString(),
        name: newCategoryName,
      },
    ];

    addCategoryMutation.mutate(newCategoryList);
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
