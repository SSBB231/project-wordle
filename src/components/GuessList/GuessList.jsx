import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

const rows = range(0, NUM_OF_GUESSES_ALLOWED).map(() => crypto.randomUUID());

function GuessList({ guesses, answer }) {
  return (
    <div className="guess-results">
      {rows.map((id, index) => (
        <Guess key={id} guess={guesses[index]?.value} answer={answer} />
      ))}
    </div>
  );
}

export default GuessList;
