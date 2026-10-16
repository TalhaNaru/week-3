import { useState } from 'react';
import type { Filter, Task } from './types';
import { TaskInput } from './components/TaskInput';
import { FilterBar } from './components/FilterBar';
import { TaskList } from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

  function handleAdd() {
    const trimmed = title.trim();
    if (trimmed === '') return;
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: trimmed,
      completed: false,
      createdAt: Date.now(),
    };
    setTasks([...tasks, newTask]);
    setTitle('');
  }

  function handleToggle(id: string) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }
  function handleDelete(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const visibleTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
  });
  return (
    <>
      <h1>Task Board</h1>
      <TaskInput title={title} onTitlechange={setTitle} onAdd={handleAdd} />
      <FilterBar filter={filter} onFilterChange={setFilter} />
      <TaskList
        tasks={visibleTasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </>
  );
}
