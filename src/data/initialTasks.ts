import type { Task } from '../types/task'

export const initialTasks: Task[] = [
  {
    id: 'task-1',
    title: 'Build task card component',
    description: 'Display task details, priority, and story points.',
    status: 'backlog',
    priority: 'high',
    storyPoints: 5,
  },
  {
    id: 'task-2',
    title: 'Create task board layout',
    description: 'Arrange tasks into clear workflow columns.',
    status: 'in-progress',
    priority: 'medium',
    storyPoints: 3,
  },
  {
    id: 'task-3',
    title: 'Add task form validation',
    description: 'Prevent incomplete tasks from being submitted.',
    status: 'done',
    priority: 'high',
    storyPoints: 5,
  },
]
