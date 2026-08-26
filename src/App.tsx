import { initialTasks } from './data/initialTasks'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="app-tagline">Agile planning, made clear.</p>
        <h1>SprintPilot</h1>
        <p className="app-summary">
          Planned tasks: {initialTasks.length}
        </p>
      </header>

      <section className="task-section">
        <h2>Backlog</h2>

        {initialTasks.map((task) => (
          <article className="task-card" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div className="task-meta">
              <span>Priority: {task.priority}</span>
              <span>Story Points: {task.storyPoints}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
