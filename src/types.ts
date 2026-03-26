export type Mood = 'Energized' | 'Focused' | 'Normal' | 'Tired' | 'Drained';

export type TaskFocus = 'High' | 'Medium' | 'Low';

export interface Task {
  id: string;
  title: string;
  description: string;
  focus: TaskFocus;
  duration: number; // in minutes
  day?: string; // e.g., 'Monday', 'Tuesday', etc.
  isEssential: boolean;
}

export type ViewMode = 'Day' | 'Week';
