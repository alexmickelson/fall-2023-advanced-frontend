import React, { useContext, useEffect, useState } from "react";
import { getBooks } from "../../services/bookService";
import { Link } from "react-router-dom";
import { BookContext, BookContextType } from "../../context/bookContext";
import { FilterInput, useFilterInput } from "./FilterInput";

export const Home = () => {
  const [counter, setCounter] = useState(1);
  const { books, setBooks } = useContext(BookContext) as BookContextType;
  const filterControl = useFilterInput();

  useEffect(() => {
    getBooks().then((newBooks) => setBooks(newBooks));
  }, []);

  const filteredBooks = books.filter((b) => {
    console.log("string comparison");
    return b.title
      .toLocaleLowerCase()
      .includes(filterControl.filterValue.toLocaleLowerCase());
  });

  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="bg-dark-subtle m-4 p-5 border border-3 rounded-4">
        Counter: {counter}
        <br />
        <button
          className="btn btn-outline-secondary"
          onClick={() => setCounter((c) => c + 1)}
        >
          Increment
        </button>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <FilterInput control={filterControl} />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {filteredBooks.map((b) => (
          <Link key={b.id} className="card m-3" to={`/book/${b.id}`}>
            <div className="card-body">
              <h5 className="card-title">{b.title}</h5>
              <p className="card-text">
                <strong>Author:</strong> {b.author}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
