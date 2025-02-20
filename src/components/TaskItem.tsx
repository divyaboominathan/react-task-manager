import {
  Box,
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useTask } from "../context/TaskContext";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
}

const TaskItem = ({ task }: Props) => {
  const { editTask,deleteTask } = useTask();
  return (
    <Box>
      <ListItem>
        <Checkbox checked={task.completed} onChange={() => editTask(task.id)} />
        <ListItemText
          primary={task.title}
        />
        <IconButton onClick={() => deleteTask(task.id)} color="error">
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </Box>
  );
};

export default TaskItem;
