import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../features/habits/habitSlice";
import { TextField, Button, Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const categories = ["Geral", "Saúde", "Estudo", "Lazer", "Trabalho"];

export default function HabitForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Geral");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (name.trim()) {
      dispatch(addHabit({ name, category }));
      setName("");
      setCategory("Geral");
    }
  };

  return (
    <Box display="flex" gap={2} my={2}>
      <TextField
        label="Hábito"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Categoria</InputLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Categoria"
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" onClick={handleSubmit}>Adicionar</Button>
    </Box>
  );
}
