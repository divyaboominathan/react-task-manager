import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useTask } from "../context/TaskContext";
import { Task } from "./constants";

interface Props {
  task: Task;
}

const TaskItem = ({ task }: Props) => {
  const { editTask, deleteTask } = useTask();

  return (
    <Box>
      <ListItem>
        <Checkbox checked={task.completed} onChange={() => editTask(task.id)} />
        <ListItemText
          primary={task.title}
          sx={{
            textDecoration: task.completed ? "line-through" : "none",
          }}
        />
        <IconButton onClick={() => deleteTask(task.id)} color="error">
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </Box>
  );
};

export default TaskItem;
