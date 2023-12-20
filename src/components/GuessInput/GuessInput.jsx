import { useState } from 'react';

function GuessInput({ onSubmit }) {
  const [inputText, setInputText] = useState('');

  function clearInput() {
    setInputText('');
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(inputText);
        clearInput();
      }}
    >
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        name="guess-input"
        type="text"
        value={inputText}
        pattern="\w{5}"
        title="Guess must be 5 characters long"
        onChange={(event) => setInputText(event.target.value.toUpperCase())} // input always uppercase
      />
    </form>
  );
}

export default GuessInput;
