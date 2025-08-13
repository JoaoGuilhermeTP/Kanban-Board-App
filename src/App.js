import React from "react";
import { Container, Typography, Box } from "@mui/material"; // Removed Paper
import Column from "./Column.js";
import useStore from "./store.js";

function App() {
  const { columns } = useStore();
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Kanban Board
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          padding: "16px 0",
        }}
      >
        {Object.values(columns).map((column) => (
          <Column key={column.id} id={column.id} title={column.title} tasks={column.tasks} />
        ))}
      </Box>
    </Container>
  );
}

export default App;