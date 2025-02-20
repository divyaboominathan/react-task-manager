import React from 'react';
import {Button,ButtonGroup} from '@mui/material';
import { useTask } from "../context/TaskContext";

const TaskFilter=()=> {
    const {filter,setFilter} = useTask();
  return (
  <ButtonGroup >
   <Button variant={filter === "all" ? "contained" : "outlined"} onClick={()=> setFilter("all")}>
All
    </Button>
    <Button variant={filter === "completed" ? "contained" : "outlined"} onClick={()=> setFilter("completed")}    >
        Completed
    </Button>
    <Button variant={filter === "pending" ? "contained" : "outlined"} onClick={()=> setFilter("pending")}>
        Pending
    </Button>
    </ButtonGroup>
  )
}

export default TaskFilter