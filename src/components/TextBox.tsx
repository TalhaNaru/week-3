import { useState } from 'react';
import type { ChangeEvent } from 'react';

export function TextBox() {
  const [text, setText] = useState(' ');

  function HandleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }
  return (
    <div>
      <input type="Text" value={text} onChange={HandleChange} />
      <p>You Typed:{text}</p>
    </div>
  );
}
