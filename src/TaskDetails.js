import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, CircularProgress, Alert } from '@mui/material';
import { useParams, Link } from 'react-router-dom';

const API_URL = 'https://34271a04-761a-401c-b932-7b2e1c4827c8-00-36os2fdk9v68e.riker.replit.dev:3001/tasks'; // Make sure this matches your json-server URL

export default function TaskDetails() {
  const { id } = useParams(); // Get the task ID from the URL
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
	// Fetch only the specific task we need
	const fetchTaskById = async () => {
	  setIsLoading(true);
	  setError(null);
	  try {
		const response = await fetch(`${API_URL}/${id}`);
		if (!response.ok) {
		  throw new Error('Task not found');
		}
		const data = await response.json();
		setTask(data);
	  } catch (err) {
		setError(err.message);
	  } finally {
		setIsLoading(false);
	  }
	};

	fetchTaskById();
  }, [id]); // Re-run this effect if the ID in the URL ever changes

  if (isLoading) {
	return (
	  <Container sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
		<CircularProgress />
	  </Container>
	);
  }

  if (error) {
	return (
	  <Container sx={{ mt: 4 }}>
		<Alert severity="error">{error}</Alert>
		<Link to="/">← Back to board</Link>
	  </Container>
	);
  }

  return (
	<Container maxWidth="sm" sx={{ mt: 4 }}>
	  <Paper elevation={3} sx={{ p: 3 }}>
		<Typography variant="h4" component="h1" gutterBottom>
		  {task.title}
		</Typography>
		<Typography variant="body1">
		  <strong>ID:</strong> {task.id}
		</Typography>
		<Typography variant="body1">
		  <strong>Status:</strong> {task.columnId}
		</Typography>
		<br />
		<Link to="/">← Back to board</Link>
	  </Paper>
	</Container>
  );
}