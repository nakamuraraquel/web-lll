import { Container, Typography } from "@mui/material";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import HabitFilter from "./components/HabitFilter";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom color="black">
        Controle de Hábitos Diários
      </Typography>
      <HabitForm />
      <HabitFilter />
      <HabitList />
    </Container>
  );
}
