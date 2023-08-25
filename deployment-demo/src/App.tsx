import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Item } from "./Item";
import { ListItem } from "./models/listItem";

const App = () => {
  const items = [
    {
      id: 1,
      name: "one",
    },
    {
      id: 2,
      name: "two",
    },
  ];
  const handleClick = (item: ListItem) => {
    return (_i: number) => _i + item.id
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {items.map((i) => (
          <Item key={i.id} item={i} onClick={handleClick(i)} />
        ))}
      </header>
    </div>
  );
};

export default App;
