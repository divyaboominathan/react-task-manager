import React from "react";
import { useTask } from "../context/TaskContext";
import { Box } from "@mui/material";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks, filter } = useTask();

  console.log("data", tasks);

  const filteredTask = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <Box>
      {filteredTask.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </Box>
  );
};

export default TaskList;
