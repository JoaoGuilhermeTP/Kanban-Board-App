import { create } from 'zustand';

const API_URL = 'https://34271a04-761a-401c-b932-7b2e1c4827c8-00-36os2fdk9v68e.riker.replit.dev:3001/tasks'; // We will double-check this URL

const useStore = create((set) => ({
  // --- STATE ---
  columns: {
    'todo': { id: 'todo', title: 'To Do', tasks: [] },
    'in-progress': { id: 'in-progress', title: 'In Progress', tasks: [] },
    'done': { id: 'done', title: 'Done', tasks: [] },
  },
  error: null,

  // --- ACTIONS ---

  fetchTasks: async () => {
    try {
      const response = await fetch(`${API_URL}`);
      console.log(response);
      if (!response.ok) throw new Error('Failed to fetch tasks');
      const tasksFromServer = await response.json();
      console.log(`Tasks from server: ${tasksFromServer}`)

      const newColumns = {
        'todo': { id: 'todo', title: 'To Do', tasks: [] },
        'in-progress': { id: 'in-progress', title: 'In Progress', tasks: [] },
        'done': { id: 'done', title: 'Done', tasks: [] },
      };

      tasksFromServer.forEach(task => {
        if (newColumns[task.columnId]) {
          newColumns[task.columnId].tasks.push(task);
        }
      });

      set({ columns: newColumns, error: null });
    } catch (error) {
      set({ error: error.message });
      console.log(`ERROR: ${error}`)
    }
  },

  addTask: async (columnId, title) => {
    try {
      const newTask = {
        id: `task-${Date.now()}`,
        title,
        columnId,
      };

      const response = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) throw new Error('Failed to add task');

      // If the server call is successful, update the state locally
      set((state) => ({
        columns: {
          ...state.columns,
          [columnId]: {
            ...state.columns[columnId],
            tasks: [...state.columns[columnId].tasks, newTask],
          },
        },
      }));

    } catch (error) {
      set({ error: error.message });
    }
  },

  deleteTask: async (columnId, taskId) => {
    try {
      const response = await fetch(`${API_URL}/${taskId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete task');

      // If the server call is successful, update the state locally
      set((state) => ({
        columns: {
          ...state.columns,
          [columnId]: {
            ...state.columns[columnId],
            tasks: state.columns[columnId].tasks.filter((task) => task.id !== taskId),
          },
        },
      }));
    } catch (error) {
      set({ error: error.message });
    }
  },
}));

export default useStore;