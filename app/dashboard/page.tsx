"use client";

import { useEffect, useState } from "react";

type Task = {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
};

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchTasks = async () => {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title) return;

    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    setTitle("");
    setDescription("");
    fetchTasks();
  };

  const deleteTask = async (id: string) => {
    await fetch(`/api/tasks?id=${id}`, {
      method: "DELETE",
    });

    fetchTasks();
  };

  const toggleTask = async (task: Task) => {
    await fetch(`/api/tasks`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: task._id,
        completed: !task.completed,
      }),
    });

    fetchTasks();
  };

  return (
    <main style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>⚡ TaskFlow Dashboard</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: 10 }}
        />

        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginRight: 10 }}
        />

        <button onClick={addTask}>➕ Add Task</button>
      </div>

      <div>
        {tasks.length === 0 && <p>No tasks yet 🚀</p>}

        {tasks.map((task) => (
          <div
            key={task._id}
            style={{
              padding: 10,
              marginBottom: 10,
              border: "1px solid #ccc",
              borderRadius: 8,
              background: task.completed ? "#d1ffd1" : "#fff",
            }}
          >
            <h3
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </h3>

            <p>{task.description}</p>

            <button onClick={() => toggleTask(task)}>
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button
              onClick={() => deleteTask(task._id)}
              style={{ marginLeft: 10, color: "red" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}