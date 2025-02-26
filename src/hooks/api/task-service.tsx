import React from "react";
import { useQuery } from "react-query";
import { apiClient } from "./apiClient";

const TASKS_KEY = "tasks";

const useTaskAPI = () => {
  const useFetchTasks = () => {
    return useQuery<any[], Error>([TASKS_KEY], async () => {
      const response = await apiClient.get("/todos?_limit=5");
      return response?.data;
    });
  };

  return React.useMemo(() => {
    return {
      useFetchTasks,
    };
  }, []);
};

export default useTaskAPI;
