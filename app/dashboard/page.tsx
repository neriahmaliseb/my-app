"use client";

import { useEffect, useState } from "react";

type Task = {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
};

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const loadTasks = async () => {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async () => {
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    setTitle("");
    setDescription("");
    loadTasks();
  };

  const deleteTask = async (id: string) => {
    await fetch(`/api/tasks?id=${id}`, {
      method: "DELETE",
    });

    loadTasks();
  };

  const toggleTask = async (task: Task) => {
    await fetch("/api/tasks", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: task._id,
        completed: !task.completed,
      }),
    });

    loadTasks();
  };

  return (
    <main style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>⚡ Dashboard</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <div style={{ marginTop: 20 }}>
        {tasks.map((task) => (
          <div key={task._id} style={{ marginBottom: 10 }}>
            <h3 style={{ textDecoration: task.completed ? "line-through" : "" }}>
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