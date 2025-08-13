import { create } from "zustand";

// A helper function to create a unique ID for our tasks
const id = () => Math.random().toString();

const useStore = create((set) => ({
  // --- STATE ---
  columns: {
    todo: {
      id: "todo",
      title: "To Do",
      tasks: [
        { id: id(), title: "Figure out state management" },
        { id: id(), title: "Learn Zustand" },
      ],
    },
    "in-progress": {
      id: "in-progress",
      title: "In Progress",
      tasks: [{ id: id(), title: "Build the static UI" }],
    },
    done: {
      id: "done",
      title: "Done",
      tasks: [{ id: id(), title: "Set up the project with Create React App" }],
    },
  },

  // --- ACTIONS ---
  addTask: (columnId, title) => {
    set((currentState) => {
      // Create new task object
      const newTask = { id: id(), title: title };
      // Get target column
      const targetColumn = currentState.columns[columnId];
      // Copy old tasks and add new one at the end
      const updatedTasks = [...targetColumn.tasks, newTask];
      // Create new updated version of the column with new task list
      const updatedColumn = {
        ...targetColumn,
        tasks: updatedTasks,
      };
      // Create new updated version of the entire columns object
      const updatedColumns = {
        // Copy all the old columns...
        ...currentState.columns,
        //... Overwrite the target column with the updated column object
        [columnId]: updatedColumn,
      };
      // Return the new columns object
      return { columns: updatedColumns };
    });
  },
}));

export default useStore;
