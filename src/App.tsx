import { initialTasks } from './data/initialTasks'
import TaskCard from './components/TaskCard'
import TaskForm from './components/TaskForm'
import { useState } from 'react'
import type { Task } from './types/task'
import './App.css'

function App() {

  const [tasks, setTasks] = useState(initialTasks)

  const backlogTasks = tasks.filter(
    (task) => task.status === 'backlog',
  )



  const inProgressTasks = tasks.filter(
    (task) => task.status === 'in-progress',
  )

  const doneTasks = tasks.filter(
    (task) => task.status === 'done',
  )

  function handleAddTask(title: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title,
      description: '',
      status: 'backlog',
      priority: 'medium',
      storyPoints: 1,
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
  }
  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="app-tagline">Agile planning, made clear.</p>
        <h1>SprintPilot</h1>
        <p className="app-summary">
          Planned tasks: {tasks.length}
        </p>
      </header>
      <TaskForm onAddTask={handleAddTask} />

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
