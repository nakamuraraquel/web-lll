import React, { useContext, useState, useEffect } from "react";
import { BooksContext } from "../context/BooksContext";
import { Book } from "../types.s";

export const CourseFilter: React.FC = () => {
  const { books } = useContext(BooksContext);
  const [course, setCourse] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  // Função para remover acentos e normalizar texto
  const normalize = (text: string) =>
    text
      .normalize("NFD") // separa acentos
      .replace(/[\u0300-\u036f]/g, "") // remove acentos
      .toLowerCase();

  // 🔎 Atualiza a lista conforme o usuário digita
  useEffect(() => {
    const query = normalize(course.trim());

    if (query === "") {
      setFilteredBooks([]);
      return;
    }

    const result = books.filter((b) =>
      normalize(b.course).includes(query)
    );
    setFilteredBooks(result);
  }, [course, books]);

  return (
    <div>
      <h2>Filtrar por Disciplina</h2>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Digite o nome da disciplina..."
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </div>

      {course && (
        <>
          {filteredBooks.length > 0 ? (
            <ul>
              {filteredBooks.map((book, i) => (
                <li key={i}>
                  <strong>{book.title}</strong>
                  <em>
                    {` ${book.author} - ${book.publisher} (${book.year}) | Disciplina: ${book.course}`}
                  </em>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum livro encontrado para “{course}”.</p>
          )}
        </>
      )}
    </div>
  );
};
