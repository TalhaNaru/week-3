import type { Task } from '../type';
import { TaskItem } from './TaskItem';

type TaskListProps = {
  tasks: Task[];
};

export function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return <p>No tasks yet.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
