import { useState } from "react";
import { CustomModal } from "./components/CustomModal";
import { BookList } from "./features/bookList/BookList";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container-md">
      <button onClick={() => setShowModal((s) => !s)}>showmodal</button>
      {showModal && (
        <CustomModal
          onChange={setShowModal}
        >
          <div>This is my modal body</div>
          <div>other</div>
        </CustomModal>
      )}
      <BookList></BookList>
    </div>
  );
};

export default App;
