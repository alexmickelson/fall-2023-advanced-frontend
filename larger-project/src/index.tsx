import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap";
import "./assets/custom.scss";
import { App } from "./App";
import { BookContextProvider } from "./context/bookContext";
import { Provider } from "react-redux";
import store from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BookContextProvider>
          <Toaster />
          <App />
        </BookContextProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
