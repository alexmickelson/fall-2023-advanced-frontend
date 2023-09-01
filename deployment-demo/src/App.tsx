import { useEffect, useState } from "react";
import "./App.css";
import { Item } from "./Item";
import { Book, generateRandomBooks } from "./models/books";
import { Spinner } from "./Spinner";
import { FilterInput } from "./FilterInput";

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [userClickCount, setUserClickCount] = useState(1);
  const [newFilterValue, setNewFilterValue] = useState("");
  const [selectedBook, setSelectedBook] = useState<Book | undefined>();
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  useEffect(() => {
    setLoading(true);
    generateRandomBooks(20_000)
      .then((data) => setBooks(data))
      .then(() => setLoading(false));
  }, [userClickCount]);

  useEffect(() => {
    setFilteredBooks(
      books.filter((b) =>
        b.title.toLowerCase().includes(newFilterValue.toLowerCase())
      )
    );
  }, [books, newFilterValue]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setUserClickCount((lastValue) => lastValue + 1)}>
          Load books
        </button>

        {loading && <Spinner />}

        {selectedBook && (
          <div>
            <div>{selectedBook.author}</div>
            <div>{selectedBook.title}</div>
            <div>{selectedBook.ISBN}</div>
          </div>
        )}

        <FilterInput
          onChange={(newFilterValue) => setNewFilterValue(newFilterValue)}
        />

        {filteredBooks.map((i) => (
          <Item onClick={(b) => setSelectedBook(b)} key={i.id} item={i} />
        ))}
      </header>
    </div>
  );
};

export default App;
