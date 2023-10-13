import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./features/home/Home";
import { BookDetailPage } from "./features/bookDetail/BookDetailPage";
import { TodoCategories } from "./features/todoCategory/TodoCategories";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/book/:bookId",
      element: <BookDetailPage />,
    },
    {
      path: "/webRequests",
      element: <TodoCategories />,
    },
  ]);
  return (
    <div className="App">
      <div>
        <a className="btn btn-primary" href="/webRequests">
          Go to Api Page
        </a>
      </div>
      <RouterProvider router={router} />
    </div>
  );
};
