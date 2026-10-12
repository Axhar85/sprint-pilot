import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it, vi } from 'vitest'
import { initialTasks } from '../data/initialTasks'
import TaskCard from './TaskCard'

it('moves a backlog task forward', async () => {
    const user = userEvent.setup()
    const onMoveForward = vi.fn()
    const task = initialTasks[0]

    render(<TaskCard task={task} onMoveForward={onMoveForward} />)

    await user.click(screen.getByRole('button', { name: /start task/i }))

    expect(onMoveForward).toHaveBeenCalledWith(task.id)
})

it('hides the action for a completed task', () => {
    const doneTask = {
        ...initialTasks[0],
        status: 'done' as const,
    }

    render(<TaskCard task={doneTask} onMoveForward={vi.fn()} />)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
})