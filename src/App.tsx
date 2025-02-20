import { Typography,Container,Box } from "@mui/material";
import "./App.css";
import { TaskProvider } from "./context/TaskContext";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import TaskFilter from "./components/TaskFilter";

const App= () => {
  return (
    <TaskProvider>
      <Box sx={{
        padding: "20px",
      }}>
      <Typography variant="h4" textAlign="center" sx={{ my:2}}>Task Manager</Typography>
      <Box sx={{ display:"flex", flexDirection:"column"}}>
      <TaskInput/>
      </Box>
      <TaskFilter/>
      <TaskList />
      </Box>
    </TaskProvider>
  );
}

export default App;
