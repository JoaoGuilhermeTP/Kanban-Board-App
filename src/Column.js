import React from "react";
import { Paper, Typography } from "@mui/material";
import TaskCard from "./TaskCard.js";

export default function Column({ title }) {
  return (
    <Paper
      elevation={3}
      sx={{ p: 2, minWidth: 300, flexShrink: 0, backgroundColor: "#f4f5f7" }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <TaskCard />
      <TaskCard />
    </Paper>
  );
}
