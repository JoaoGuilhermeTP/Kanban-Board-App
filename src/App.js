import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home.js';
import TaskDetails from './TaskDetails.js';

function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
  );
}

export default App;