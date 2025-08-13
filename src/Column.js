import React, { useState } from "react";
import { Paper, Typography, Button } from "@mui/material";
import AddTaskModal from './AddTaskModal.js';
import TaskCard from "./TaskCard.js";

export default function Column({ title, tasks, id }) {
  const [open, setOpen] = useState(false);
  console.log(title, tasks);
  return (
    <Paper
      elevation={3}
      sx={{ p: 2, minWidth: 300, flexShrink: 0, backgroundColor: "#f4f5f7" }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {tasks.map((task) => (
        <TaskCard key={task.id} id={task.id} title={task.title} columnId={id} />
      ))}
      <Button fullWidth sx={{mt: 2}} onClick={() => setOpen(true)}>
        + Add a task
      </Button>
      <AddTaskModal
        open={open}
        handleClose={() => setOpen(false)}
        columnId={id}
      />
    </Paper>
  );
}
