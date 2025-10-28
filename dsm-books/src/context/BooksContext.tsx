import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Book } from "../types.s";

interface BooksContextType {
  books: Book[];
  filterByCourse: (course: string) => Book[];
}

export const BooksContext = createContext<BooksContextType>({
  books: [],
  filterByCourse: () => [],
});

export const BooksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get("/data/books.json").then((res) => setBooks(res.data));
  }, []);

  const filterByCourse = (course: string) =>
    books.filter((b) => b.course === course);

  return (
    <BooksContext.Provider value={{ books, filterByCourse }}>
      {children}
    </BooksContext.Provider>
  );
};
