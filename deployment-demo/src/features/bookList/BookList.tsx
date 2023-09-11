import { useEffect, useState } from "react";
import { FilterInput } from "./FilterInput";
import { BookItem } from "./BookItem";
import { Spinner } from "../../components/Spinner";
import { Book, generateRandomBooks } from "../../models/books";
import { BookDetails } from "./BookDetails";
import { ListDetail } from "../../components/ListDetail";

export const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [userClickCount, setUserClickCount] = useState(1);
  const [newFilterValue, setNewFilterValue] = useState("");
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

      <ListDetail
        items={filteredBooks}
        ListComponent={BookItem}
        ItemDetail={BookDetails}
        updateItem={(newBook: Book) => {
          setBooks((oldBooks) =>
            oldBooks.map((b) => (b.id === newBook.id ? newBook : b))
          );
        }}
      />
    </div>
  );
};
