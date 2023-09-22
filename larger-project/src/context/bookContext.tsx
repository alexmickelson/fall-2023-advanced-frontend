import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { Book } from "../models/books";
import { getBooks } from "../services/bookService";

export interface BookContextType {
  books: Book[];
  setBooks: (b: Book[]) => void;
  updateBook: (b: Book) => void;
}

export const BookContext = createContext<BookContextType>({
  books: [],
  setBooks: () => {},
  updateBook: () => {},
});

const bookStorageKey = "storedbooks";
const storeBooksInLocalStorage = (books: Book[]) => {
  localStorage.setItem(bookStorageKey, JSON.stringify(books));
};

const getBooksFromLocalStorage = (): Book[] => {
  const stringifiedBooks = localStorage.getItem(bookStorageKey);
  return JSON.parse(stringifiedBooks ?? "[]");
};

export const BookContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [books, setBooks] = useState<Book[]>(getBooksFromLocalStorage());

  //loading
  useEffect(() => {
    const booksFromStorage = getBooksFromLocalStorage();
    if (booksFromStorage.length === 0) {
      getBooks().then((newBooks) => setBooks(newBooks));
    } else {
      setBooks(booksFromStorage);
    }
  }, []);

  // //saving
  // useEffect(() => {
  //   console.log("storing books");
  //   storeBooksInLocalStorage(books)
  // }, [books])

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log("storing books");
      storeBooksInLocalStorage(books);
    }, 500);

    return () => clearTimeout(handler);
  }, [books]);

  const updateBook = (newBook: Book) => {
    setBooks((oldBooks) => [
      newBook,
      ...oldBooks.filter((b) => b.id !== newBook.id),
    ]);
  };

  const startingValue: BookContextType = {
    books,
    setBooks,
    updateBook,
  };
  return (
    <BookContext.Provider value={startingValue}>
      {children}
    </BookContext.Provider>
  );
};
