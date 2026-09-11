import { initialTasks } from './data/initialTasks'
import TaskCard from './components/TaskCard'
import TaskForm from './components/TaskForm'
import { useEffect, useState } from 'react'
import type { Task } from './types/task'
import './App.css'


const TASKS_STORAGE_KEY = 'sprint-pilot-tasks'
function App() {


  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY)

    if (!storedTasks) {
      return initialTasks
    }

    try {
      return JSON.parse(storedTasks) as Task[]
    } catch {
      return initialTasks
    }
  })

  useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

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

  function handleMoveForward(taskId: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id !== taskId) {
          return task
        }

        const nextStatus =
          task.status === 'backlog' ? 'in-progress' : 'done'

        return { ...task, status: nextStatus }
      }),
    )
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
            <TaskCard
              key={task.id}
              task={task}
              onMoveForward={handleMoveForward}
            />
          ))}
        </section>
        <section className="task-section">
          <h2>In Progress</h2>
          {inProgressTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onMoveForward={handleMoveForward}
            />
          ))}
        </section>
        <section className="task-section">
          <h2>Done</h2>
          {doneTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onMoveForward={handleMoveForward}
            />
          ))}
        </section>
      </div>
    </main>
  )
}

export default App
