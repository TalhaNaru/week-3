type TaskInputProps = {
  title: string;
  onTitlechange: (title: string) => void;
  onAdd: () => void;
};

export function TaskInput({ title, onTitlechange, onAdd }: TaskInputProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="Add a text"
        value={title}
        onChange={(event) => onTitlechange(event.target.value)}
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
