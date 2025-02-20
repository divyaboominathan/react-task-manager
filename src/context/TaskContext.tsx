import { error } from "console";
import {
  Children,
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { apiClient } from "../hooks/api/apiClient";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface ContextType {
  tasks: Task[];
  filter: string;
  setFilter: (filter: string) => void;
  addTask: (title: string) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number) => void;
}

const TaskContext = createContext<ContextType | undefined>(undefined);

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("UseTask must be within the TaskProvider");
  return context;
};

interface ProviderProps {
  children?: ReactNode;
}

export const TaskProvider = ({ children }: ProviderProps) => {
  const [tasks, setTask] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    apiClient.get("/todos?_limit=5").then((res) => {
      setTask(res.data);
    });
  }, []);

  const addTask = (title: string) => {
    const newTask: Task = { id: Date.now(), title, completed: false };
    setTask([...tasks, newTask]);
  };

  const editTask = (id: number) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const  deleteTask= (id: number) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, filter, setFilter, addTask, deleteTask, editTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
