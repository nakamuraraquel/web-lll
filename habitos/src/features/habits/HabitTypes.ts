export interface Habit {
    id: string;
    name: string;
    category?: string;
    completed: boolean;
  }
  
  export interface HabitState {
    items: Habit[];
    filter: string;
  }
  