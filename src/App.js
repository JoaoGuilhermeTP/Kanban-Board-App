import React from 'react';
import { Container, Typography, Box } from '@mui/material'; // Removed Paper
import Column from './Column.js';

function App() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Kanban Board
      </Typography>

      <Box sx={{
        display: 'flex',
        gap: 2,
        overflowX: 'auto',
        padding: '16px 0'
      }}>
        {/* The extra <p> tag is removed */}
        <Column title="To Do" />
        <Column title="In Progress" />
        <Column title="Done" />
      </Box>
    </Container>
  );
}

export default App;