import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BooksProvider } from "./context/BooksContext";
import { Home } from "./pages/Home";
import { Course } from "./pages/Course";

function App() {
  return (
    <BooksProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/course">Filtrar</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
