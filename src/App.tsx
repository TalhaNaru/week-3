import type { Task } from './type';
import { TaskList } from './components/TaskList';

const sampletasks: Task[] = [
  { id: '1', title: 'Learn JSX', completed: true, createdAt: 1 },
  { id: '2', title: 'Learn props', completed: false, createdAt: 2 },
  { id: '3', title: 'Render a list', completed: false, createdAt: 3 },
];

export default function App() {
  return (
    <>
      <h1>Task Board</h1>
      <TaskList tasks={sampletasks} />
    </>
  );
}
