import { range } from '../../utils';
import { GUESS_MAX_LENGTH } from '../../constants';
import { checkGuess } from '../../game-helpers';

const columns = range(0, GUESS_MAX_LENGTH).map(() => crypto.randomUUID());

function Guess({ guess = '', answer = '' }) {
  const letterStatuses = checkGuess(guess, answer);
  return (
    <p className="guess">
      {columns.map((id, index) => {
        const currentLetterStatus = letterStatuses?.[index];
        return (
          <span
            key={guess?.id ?? id}
            className={`cell${
              currentLetterStatus?.status
                ? ' ' + currentLetterStatus?.status
                : ''
            }`}
          >
            {currentLetterStatus?.letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
