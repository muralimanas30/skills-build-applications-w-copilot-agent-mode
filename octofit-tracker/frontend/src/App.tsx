import { Link, Route, Routes } from 'react-router-dom';

function HomePage() {
  return (
    <main className="container py-5">
      <section className="hero-card p-5 rounded-4 shadow-sm">
        <p className="text-uppercase text-info fw-semibold mb-2">OctoFit Tracker</p>
        <h1 className="display-5 fw-bold">Train smarter. Track everything.</h1>
        <p className="lead mt-3 mb-4">
          React 19, Vite, Bootstrap, and a backend ready for activity logging, teams, and leaderboards.
        </p>
        <div className="d-flex gap-3 flex-wrap">
          <Link className="btn btn-light btn-lg" to="/dashboard">
            Go to dashboard
          </Link>
          <Link className="btn btn-outline-light btn-lg" to="/teams">
            Explore teams
          </Link>
        </div>
      </section>
    </main>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="container py-5">
      <div className="card border-0 shadow-sm p-4">
        <h1 className="h3 mb-3">{title}</h1>
        <p className="mb-0 text-secondary">This route is ready for the OctoFit Tracker workflow.</p>
      </div>
    </main>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<PlaceholderPage title="Dashboard" />} />
      <Route path="/teams" element={<PlaceholderPage title="Teams" />} />
      <Route path="*" element={<PlaceholderPage title="Not found" />} />
    </Routes>
  );
}