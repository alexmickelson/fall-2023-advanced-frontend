import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { Book } from "../models/books";

export interface BookContextType {
  books: Book[];
  setBooks: Dispatch<SetStateAction<Book[]>>;
}

export const BookContext = createContext<BookContextType | null>(null);

export const BookContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [books, setBooks] = useState<Book[]>([]);
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
