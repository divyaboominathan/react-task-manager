export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const filters = ["all", "completed", "pending"];
