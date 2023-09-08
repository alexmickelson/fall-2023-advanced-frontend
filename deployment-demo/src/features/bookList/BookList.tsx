import { useEffect, useState } from "react";
import { FilterInput } from "./FilterInput";
import { Item } from "./BookItem";
import { Spinner } from "../../components/Spinner";
import { Book, generateRandomBooks } from "../../models/books";
import { BookDetails } from "./BookDetails";

export const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [userClickCount, setUserClickCount] = useState(1);
  const [newFilterValue, setNewFilterValue] = useState("");
  const [selectedBook, setSelectedBook] = useState<Book | undefined>();
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  useEffect(() => {
    setLoading(true);
    generateRandomBooks(200)
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
    <div>
      <div className="row align-items-center my-3 justify-content-between">
        <div className="col-8 col-sm-5 col-md-4 col-lg-2">
          <FilterInput
            onChange={(newFilterValue) => setNewFilterValue(newFilterValue)}
          />
        </div>
        <div className="col-auto my-auto">
          <button
            className="btn btn-outline-primary"
            onClick={() => setUserClickCount((lastValue) => lastValue + 1)}
          >
            Load books
          </button>
        </div>
      </div>
      {loading && <Spinner />}

      <div className="row">
        <div className="col-4">
          <ul className="list-group">
            {filteredBooks.map((i) => (
              <Item
                onClick={(b) => setSelectedBook(b)}
                key={i.id}
                item={i}
                isSelected={i.id === selectedBook?.id}
              />
            ))}
          </ul>
        </div>
        <div className="col">
          {selectedBook && <BookDetails book={selectedBook} />}
        </div>
      </div>
    </div>
  );
};
