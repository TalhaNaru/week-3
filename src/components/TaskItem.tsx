import type { Task } from '../types';

type TaskItemProps = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li>
      <span
        onClick={() => onToggle(task.id)}
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.title}
      </span>
      <button onClick={() => onDelete(task.id)}>DELETE</button>
    </li>
  );
}
