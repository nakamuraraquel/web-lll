import { useDispatch } from "react-redux";
import { setFilter, clearCompleted } from "../features/habits/habitSlice";
import { Box, Button } from "@mui/material";

const categories = ["Saúde", "Estudo", "Lazer", "Trabalho"];

export default function HabitFilter() {
  const dispatch = useDispatch();

  return (
    <Box display="flex" gap={2} my={2} flexWrap="wrap">
    
      <Button
        variant="outlined"
        onClick={() => dispatch(setFilter("all"))}
      >
        Todos
      </Button>

      
      {categories.map((cat) => (
        <Button
          key={cat}
          variant="outlined"
          onClick={() => dispatch(setFilter(cat))}
        >
          {cat}
        </Button>
      ))}

      <Button
        variant="contained"
        color="error"
        onClick={() => dispatch(clearCompleted())}
      >
        Limpar Concluídos
      </Button>
    </Box>
  );
}
