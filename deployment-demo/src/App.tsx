import { useState } from "react";
import {
  CustomModal,
  useCustomModalControl,
  prettyDate,
} from "./components/CustomModal";
import { BookList } from "./features/bookList/BookList";
import { Counter } from "./components/Counter";

const App = () => {
  const customModalControl = useCustomModalControl({
    onClose: () => alert("you closed!"),
  });
  return (
    <div className="container-md">
      <button onClick={() => customModalControl.show()}>showmodal</button>
      <Counter />
      <CustomModal control={customModalControl}>
        <div>This is my modal body</div>
        <div>other</div>
        {prettyDate(new Date())}
      </CustomModal>
      <BookList></BookList>
    </div>
  );
};

export default App;
