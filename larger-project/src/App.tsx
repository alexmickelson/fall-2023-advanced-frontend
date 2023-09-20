import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./features/home/Home";
import { BookDetailPage } from "./features/bookDetail/BookDetailPage";

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
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};
