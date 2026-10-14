import { useState } from 'react';

type Item = { id: string; label: string; done: boolean };
const startItems: Item[] = [
  { id: '1', label: 'First', done: false },
  { id: '2', label: 'Second', done: false },
];

export function ImmutableDemo() {
  const [items, setItems] = useState<Item[]>(startItems);

  function addItem() {
    const next: Item = {
      id: crypto.randomUUID(),
      label: 'Another',
      done: false,
    };
    setItems([...items, next]);
  }
  function toggleItem(id: string) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  }
  function removeItem(id: string) {
    setItems(items.filter((item) => item.id !== id));
  }
  return (
    <div>
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span onClick={() => toggleItem(item.id)}>
              {item.label}
              {item.done ? 'done' : 'open'}
            </span>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
