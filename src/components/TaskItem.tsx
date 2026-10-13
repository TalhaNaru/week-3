import type { Task } from '../type';

type TaskItemProps = {
  task: Task;
};

export function TaskItem({ task }: TaskItemProps) {
  return (
    <li>
      <span>{task.title}</span>
      {task.completed ? <span> (completed)</span> : <span> (active)</span>}
    </li>
  );
}
