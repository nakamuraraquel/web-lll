import { useState } from "react";
import { useDispatch } from "react-redux";
import { editHabit } from "../features/habits/habitSlice";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, FormControl, InputLabel, Select, MenuItem
} from "@mui/material";

const categories = ["Geral", "Saúde", "Estudo", "Lazer", "Trabalho"];

interface EditHabitDialogProps {
  open: boolean;
  onClose: () => void;
  habit: { id: string; name: string; category?: string };
}

export default function EditHabitDialog({ open, onClose, habit }: EditHabitDialogProps) {
  const [name, setName] = useState(habit.name);
  const [category, setCategory] = useState(habit.category || "Geral");
  const dispatch = useDispatch();

  const handleSave = () => {
    if (name.trim()) {
      dispatch(editHabit({ id: habit.id, name, category }));
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Editar Hábito</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="dense"
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormControl fullWidth margin="dense">
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
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" onClick={handleSave}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}
