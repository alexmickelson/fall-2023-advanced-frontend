import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Item } from "./Item";
import { ListItem } from "./models/listItem";
import { canvastoken } from "./secrets";

const App = () => {
  const items = [
    {
      id: 1,
      name: "one",
      token: canvastoken,
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

      <img src="/dog.jpg" alt="dog" />
    </div>
  );
};

export default App;
