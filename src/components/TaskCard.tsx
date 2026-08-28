import type { Task } from '../types/task'

interface TaskCardProps {
    task: Task
}

function TaskCard({ task }: TaskCardProps) {
    return (
        <article className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div className="task-meta">
                <span>Priority: {task.priority}</span>
                <span>Story Points: {task.storyPoints}</span>
            </div>
        </article>
    )
}

export default TaskCard


