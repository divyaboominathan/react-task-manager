import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Task } from "../components/constants";
import useTaskAPI from "../hooks/api/task-service";

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
  const { useFetchTasks } = useTaskAPI();
  const { data }: any = useFetchTasks();
  const [tasks, setTask] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    if (data) {
      setTask(data);
    }
  }, [data]);

  const addTask = (title: string) => {
    setTask((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), title, completed: false },
    ]);
  };

  const editTask = (id: number) => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const contextValues = React.useMemo(
    () => ({ tasks, filter, setFilter, addTask, deleteTask, editTask }),
    [tasks, filter]
  );

  return (
    <TaskContext.Provider value={contextValues}>
      {children}
    </TaskContext.Provider>
  );
};
