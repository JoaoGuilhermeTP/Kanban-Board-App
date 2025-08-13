import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import useStore from './store';

export default function AddTaskModal({open, handleClose, columnId}) {
  const [title, setTitle] = useState('');
  const {addTask} = useStore();

  const handleSubmit = () => {
    if (title.trim()) {
      addTask(columnId, title);
      setTitle('');
      handleClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add a New Task</DialogTitle>
      <DialogContent>
        <TextField 
          autoFocusmargin='dense'
          label='Task Title'
          type='text'
          fullWidth
          variant='standard'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
      
    </Dialog>
  );
}