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
}

export const BookContext = createContext<BookContextType>({
  books: [],
  setBooks: () => {},
});

export const BookContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [books, setBooks] = useState<Book[]>([]);
  
  useEffect(() => {
    getBooks().then((newBooks) => setBooks(newBooks));
  }, []);
  
  const startingValue: BookContextType = {
    books,
    setBooks,
  };
  return (
    <BookContext.Provider value={startingValue}>
      {children}
    </BookContext.Provider>
  );
};
