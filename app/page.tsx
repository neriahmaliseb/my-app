
"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  async function askAI() {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setReply(data.reply);
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>🤖 TaskFlow AI Assistant</h1>

      <textarea
        rows={6}
        cols={60}
        placeholder="Ask AI to help with your tasks..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br /><br />

      <button onClick={askAI}>Ask AI</button>

      <h2>AI Response</h2>

      <p>{reply}</p>
    </main>
  );
}

