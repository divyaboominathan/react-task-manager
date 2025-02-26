import { Button, ButtonGroup } from "@mui/material";
import { useTask } from "../context/TaskContext";
import { filters } from "./constants";

const TaskFilter = () => {
  const { filter, setFilter } = useTask();

  return (
    <ButtonGroup>
      {filters.map((status) => (
        <Button
          key={status}
          variant={filter === status ? "contained" : "outlined"}
          onClick={() => setFilter(status)}
        >
          {status}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default TaskFilter;
