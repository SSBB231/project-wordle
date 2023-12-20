import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import Banner from '../Banner';
import Keyboard from '../Keyboard';
import Button from '../Button';
import { checkGuess } from '../../game-helpers';

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [letters, setLetters] = useState({});
  const [answer, setAnswer] = useState(() => {
    const word = sample(WORDS);
    console.log({ answer: word });
    return word;
  });

  function restart() {
    const newWord = sample(WORDS);
    setAnswer(newWord);
    setGuesses([]);
    setLetters({});
    console.log({ answer: newWord });
  }

  function addLetters(guess) {
    const result = checkGuess(guess, answer);
    const newLetters = result.reduce((finalObject, currentLetter) => {
      const { letter, status } = currentLetter;
      const currentStatus = finalObject[currentLetter.letter];
      if (currentStatus === 'correct') {
        return finalObject;
      }
      if (currentStatus === 'misplaced' && status === 'correct') {
        return { ...finalObject, [letter]: status };
      }
      if (currentStatus === 'misplaced' && status === 'incorrect') {
        return finalObject;
      }

      return { ...finalObject, [letter]: status };
    }, {});

    setLetters((currentLetters) => {
      return { ...currentLetters, ...newLetters };
    });
  }

  function addGuess(guess) {
    const newGuesses = [...guesses, { id: crypto.randomUUID(), value: guess }];
    setGuesses(newGuesses);
    addLetters(guess);
  }

  const currentGuess = guesses[guesses.length - 1]?.value ?? '';
  const won = currentGuess === answer;
  const lost = guesses.length >= 6;
  const gameOver = lost || won;

  const bannerMessage = won ? (
    <>
      <strong>Congratulations!</strong> Got it in{' '}
      <strong>{`${guesses.length} guesses`}</strong>
      <br />
      <Button onClick={restart}>Reset</Button>
    </>
  ) : (
    <>
      Sorry, the correct answer was {answer}
      <br />
      <Button onClick={restart}>Reset</Button>
    </>
  );

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      {gameOver ? (
        <Banner variant={won ? 'happy' : 'sad'}>{bannerMessage}</Banner>
      ) : (
        <>
          <GuessInput onSubmit={addGuess} />
          <Keyboard letters={letters} />
        </>
      )}
    </>
  );
}

export default Game;
