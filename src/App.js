import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material'; // 1. Import MUI components

function App() {
  return (
    // 2. Use Container for overall page layout
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Kanban Board
      </Typography>

      {/* 3. Use Box with Flexbox to lay out the columns horizontally */}
      <Box sx={{
        display: 'flex',
        gap: 2, // Adds space between the columns
        overflowX: 'auto', // Allows horizontal scrolling if columns overflow
        padding: '16px 0'
      }}>

        {/* --- Placeholder Columns --- */}
        <Paper elevation={3} sx={{ p: 2, minWidth: 300, flexShrink: 0 }}>
          <Typography variant="h6">To Do</Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 2, minWidth: 300, flexShrink: 0 }}>
          <Typography variant="h6">In Progress</Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 2, minWidth: 300, flexShrink: 0 }}>
          <Typography variant="h6">Done</Typography>
        </Paper>
        {/* --- End Placeholder Columns --- */}

      </Box>
    </Container>
  );
}

export default App;