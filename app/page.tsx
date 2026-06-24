export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>🚀 TaskFlow App</h1>

      <p>Full Stack CRUD App with MongoDB + Next.js</p>

      <a href="/dashboard">
        <button style={{ marginTop: 20 }}>Go to Dashboard</button>
      </a>
    </main>
  );
}