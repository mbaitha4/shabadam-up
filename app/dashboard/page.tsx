export default function DashboardPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Editor Dashboard</h1>
      <p>Welcome to Shabadam Editor Panel</p>

      <a href="/dashboard/new">
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          Add New Article
        </button>
      </a>
    </div>
  );
}
