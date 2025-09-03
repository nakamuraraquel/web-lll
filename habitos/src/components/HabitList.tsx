import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../app/store";
import { toggleHabit, deleteHabit } from "../features/habits/habitSlice";
import { List, ListItem, ListItemText, Checkbox, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditHabitDialog from "./EditHabitDialog";

export default function HabitList() {
  const { items, filter } = useSelector((state: RootState) => state.habits);
  const dispatch = useDispatch();

  const [selectedHabit, setSelectedHabit] = useState<any>(null);

  const filtered = filter === "all"
  ? items
  : items.filter(h => h.category === filter);

  return (
    <>
      <List>
        {filtered.map(habit => (
          <ListItem
            key={habit.id}
            secondaryAction={
              <>
                <IconButton edge="end" onClick={() => setSelectedHabit(habit)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" onClick={() => dispatch(deleteHabit(habit.id))}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <Checkbox checked={habit.completed} onChange={() => dispatch(toggleHabit(habit.id))} />
            <ListItemText primary={habit.name} secondary={habit.category} />
          </ListItem>
        ))}
      </List>

      {selectedHabit && (
        <EditHabitDialog
          open={!!selectedHabit}
          habit={selectedHabit}
          onClose={() => setSelectedHabit(null)}
        />
      )}
    </>
  );
}
