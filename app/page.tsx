export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>🚀 My Day 1 App</h1>

      <section>
        <h2>📌 Spec</h2>
        <p>
          This is a simple Next.js scaffolded application built for Day 1.
          It demonstrates a working frontend setup.
        </p>
      </section>

      <section>
        <h2>🧩 Core Screen</h2>
        <p>Home Page (/)</p>
      </section>

      <section>
        <h2>⚙️ Features</h2>
        <ul>
          <li>Next.js App Router setup</li>
          <li>Working local development server</li>
          <li>Basic UI rendering</li>
        </ul>
      </section>

      <p style={{ marginTop: "20px" }}>
        Status: ✅ Running successfully
      </p>
    </main>
  );
}