import React, { FC, useState } from 'react'
import { TodoCategory } from './models';

export const NewCategory = () => {
  const [newCategoryName, setNewCategoryName] = useState("");
  const allCategories: TodoCategory[] = []; //todo: get from api

  const addCategory = () => {
    const newItemList: TodoCategory[] = [
      ...allCategories,
      {
        id: new Date().valueOf().toString(),
        name: newCategoryName,
        items: []
      },
    ];

    // todo: add category in api
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
      <button className="btn btn-outline-primary mt-3">Add</button>
    </form>
  );
};
