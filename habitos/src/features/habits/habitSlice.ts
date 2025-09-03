import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { HabitState } from "./HabitTypes";
import { v4 as uuid } from "uuid";

const initialState: HabitState = {
  items: [],
  filter: "all",
};

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<{ name: string; category?: string }>) => {
      state.items.push({
        id: uuid(),
        name: action.payload.name,
        category: action.payload.category || "Geral",
        completed: false,
      });
    },
    editHabit: (state, action: PayloadAction<{ id: string; name: string; category?: string }>) => {
      const habit = state.items.find(h => h.id === action.payload.id);
      if (habit) {
        habit.name = action.payload.name;
        habit.category = action.payload.category || "Geral";
      }
    },
    toggleHabit: (state, action: PayloadAction<string>) => {
      const habit = state.items.find(h => h.id === action.payload);
      if (habit) habit.completed = !habit.completed;
    },
    deleteHabit: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(h => h.id !== action.payload);
    },
    clearCompleted: (state) => {
      state.items = state.items.filter(h => !h.completed);
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { addHabit, editHabit, toggleHabit, deleteHabit, clearCompleted, setFilter } = habitSlice.actions;
export default habitSlice.reducer;
