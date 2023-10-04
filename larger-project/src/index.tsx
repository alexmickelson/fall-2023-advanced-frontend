import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap";
import "./assets/custom.scss";
import { App } from "./App";
import { BookContextProvider } from "./context/bookContext";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BookContextProvider>
        <App />
      </BookContextProvider>
    </Provider>
  </React.StrictMode>
);
