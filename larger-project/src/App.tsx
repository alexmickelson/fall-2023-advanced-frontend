import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./features/home/Home";
import { BookDetailPage } from "./features/bookDetail/BookDetailPage";
import { WebRequests } from "./features/webRequests/WebRequests";

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
      element: <WebRequests />,
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
