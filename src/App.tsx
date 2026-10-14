import { Counter } from './components/Counter';
import { TextBox } from './components/TextBox';
import { ImmutableDemo } from './components/ImmutableDemo';

export default function App() {
  return (
    <>
      <h1>Task Board</h1>
      <Counter />
      <TextBox />
      <ImmutableDemo />
    </>
  );
}
