import { useState, type FormEvent } from 'react'


interface TaskFormProps {
    onAddTask: (title: string) => void
}
function TaskForm({ onAddTask }: TaskFormProps) {
    const [title, setTitle] = useState('')
    const [error, setError] = useState('')
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const trimmedTitle = title.trim()
        if (trimmedTitle === '') {
            setError('Task title cannot be empty.')
            return
        }
        setError('')
        onAddTask(trimmedTitle)
        setTitle('')
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <label htmlFor="task-title">
                Task Title
            </label>
            <input
                id="task-title"
                name="title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                aria-invalid={error !== ''}
                aria-describedby={error ? 'task-title-error' : undefined}
            />
            {error && (
                <p id="task-title-error" role="alert">{error}</p>
            )}
            <button type="submit">Add Task</button>
        </form>
    )
}

export default TaskForm