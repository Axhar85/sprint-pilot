import type { Task } from '../types/task'

interface TaskCardProps {
    onMoveForward: (taskId: string) => void
    task: Task
}

function TaskCard({ task, onMoveForward }: TaskCardProps) {
    const actionLabel =
        task.status === 'backlog' ? 'Start task' : 'Complete task'
    return (
        <article className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div className="task-meta">
                <span>Priority: {task.priority}</span>
                <span>Story Points: {task.storyPoints}</span>
            </div>
            {task.status !== 'done' && (
                <button
                    className="task-action"
                    type="button"
                    onClick={() => onMoveForward(task.id)}
                >
                    {actionLabel}
                </button>
            )}
        </article>
    )
}

export default TaskCard


