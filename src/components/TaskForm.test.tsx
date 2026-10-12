import { render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import TaskForm from './TaskForm'
import userEvent from '@testing-library/user-event'

it('renders the task title field', () => {
    render(<TaskForm onAddTask={vi.fn()} />)

    expect(
        screen.getByRole('textbox', { name: /task title/i }),
    ).toBeInTheDocument()
})

it('submits a trimmed task title', async () => {
    const user = userEvent.setup()
    const onAddTask = vi.fn()

    render(<TaskForm onAddTask={onAddTask} />)

    await user.type(screen.getByRole('textbox'), '  Learn React  ')
    await user.click(screen.getByRole('button', { name: /add task/i }))

    expect(onAddTask).toHaveBeenCalledWith('Learn React')
})

it('rejects an empty task title', async () => {
    const user = userEvent.setup()
    const onAddTask = vi.fn()

    render(<TaskForm onAddTask={onAddTask} />)

    await user.click(screen.getByRole('button', { name: /add task/i }))

    expect(screen.getByRole('alert')).toHaveTextContent(
        'Task title cannot be empty.',
    )
    expect(onAddTask).not.toHaveBeenCalled()
})