import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

export const BookList = () => {
  const { books } = useContext(BooksContext);

  return (
    <ul>
      {books.map((book, i) => (
        <li key={i}>
          <strong>{book.title}</strong> - {book.author} ({book.publisher}, {book.year})
          <br />
          <em>{book.course}</em>
        </li>
      ))}
    </ul>
  );
};
