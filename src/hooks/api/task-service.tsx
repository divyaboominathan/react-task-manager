import React from "react";
import { apiClient } from "./apiClient";

export const useTaskAPI = async() => {
  return apiClient.get("/todos?_limit=5")
};
