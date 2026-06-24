export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>🚀 TaskFlow Pro</h1>

      <p>Full-stack CRUD app with MongoDB + Next.js</p>

      <a href="/dashboard">
        <button style={{ marginTop: 20 }}>Go to Dashboard</button>
      </a>
    </main>
  );
}