import { Box, Typography } from "@mui/material";
import "./App.css";
import TaskFilter from "./components/TaskFilter";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/TaskContext";

const App = () => {
  return (
    <TaskProvider>
      <Box
        sx={{
          padding: "20px",
        }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ my: 2 }}
          color="#1976d2"
        >
          Task Manager
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TaskInput />
        </Box>
        <TaskFilter />
        <TaskList />
      </Box>
    </TaskProvider>
  );
};

export default App;
