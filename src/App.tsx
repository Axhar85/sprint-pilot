import { initialTasks } from './data/initialTasks'
import TaskCard from './components/TaskCard'
import './App.css'

function App() {
  const backlogTasks = initialTasks.filter(
    (task) => task.status === 'backlog',
  )

  const inProgressTasks = initialTasks.filter(
    (task) => task.status === 'in-progress',
  )

  const doneTasks = initialTasks.filter(
    (task) => task.status === 'done',
  )

  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="app-tagline">Agile planning, made clear.</p>
        <h1>SprintPilot</h1>
        <p className="app-summary">
          Planned tasks: {initialTasks.length}
        </p>
      </header>

      <div className="task-board">
        <section className="task-section">
          <h2>Backlog</h2>

          {backlogTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </section>
        <section className="task-section">
          <h2>In Progress</h2>
          {inProgressTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </section>
        <section className="task-section">
          <h2>Done</h2>
          {doneTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default App
