import React, { useState } from "react";
import { useTask } from "../context/TaskContext";
import { Button, Stack, TextField } from "@mui/material";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const { addTask } = useTask();

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <Stack mb={10} sx={{display:"flex", padding:"20px", width:"300px",}}>
      <TextField
        label="New Task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        sx={{
          marginBottom:"10px"
        }}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Add Task
      </Button>
    </Stack>
  );
};

export default TaskInput;
