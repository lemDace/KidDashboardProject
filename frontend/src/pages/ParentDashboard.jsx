import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ParentDashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: "", description: "", value: 0 });

  const fetchTasks = async () => {
    const res = await axios.get("http://127.0.0.1:8000/tasks/");
    setTasks(res.data);
  };

  const addTask = async () => {
    await axios.post("http://127.0.0.1:8000/tasks/", newTask);
    setNewTask({ name: "", description: "", value: 0 });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Parent Dashboard</h2>

      {/* Add Task Form */}
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 rounded"
          placeholder="Task name"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <input
          type="number"
          className="border p-2 rounded"
          placeholder="Value $"
          value={newTask.value}
          onChange={(e) => setNewTask({ ...newTask, value: parseFloat(e.target.value) })}
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>

      {/* Task List */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between p-2 border-b">
            <span>{task.name} - ${task.value}</span>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
